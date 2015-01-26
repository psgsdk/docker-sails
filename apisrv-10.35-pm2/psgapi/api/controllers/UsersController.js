/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var rdsfunc = require('../../js/rdsauth.js')
var genhash = require('../../js/fgen.js')

module.exports = {
   chklogin: function(req,res){
   rcb = function readcallback(err,message){
	if (err) {res.send({'error':err})}
	else {
		if (message){res.send(message)}else{res.status(404);res.send({'error':'key not found'})};
        };
  };
   var hkey = req.headers.hkey
   rdsfunc.getkey(hkey,rcb)
   },
   logoff: function(req,res){
   if (req.session.authenticated){
   	req.session.authenticated = false
   	req.session.userid = '-'
   	res.send({'logoff':'ok'});
   };
   if (!req.session.authenticated){res.status(403);res.send({'error':'not authorized','auth':false})};
   },	
   login: function (req,res) {
        if (req.headers.authorization){
		var cuser = ""
        	var cpass = ""
		var authstring = req.headers.authorization
                authstring = genhash.base64(authstring.substring(6,authstring.length),'d');
                var sauth = authstring.split(":")
		cuser = sauth[0].toLowerCase()
		for (i=1;i<sauth.length;i++) {
		 	cpass = cpass + sauth[i];
			if (i<sauth.length-1) {cpass = cpass + ':'};
		};
                Users.find({username:cuser}).exec(function(err, user) { 
			if (err){res.status(403);res.send({'error':'user not found','auth':'false'})};
			if (user.length != 1){res.status(403);res.send({'error':'user not found','auth':'false'})};
			if (user.length == 1){			
				chash = genhash.hash(cpass,26);
				if (chash==user[0].phash){
				// - set user session auth - used with local authorization!
				//req.session.authenticated = true
				//req.session.userid = user[0].id
				// -----------------------
				//console.log('login')
			        var hkey = genhash.uuid() 
                                message = {'id':user[0].id,'username':user[0].username,'email':user[0].email,'createdAt':user[0].createdAt,'hkey':hkey} 
				rdsfunc.setkey(hkey,JSON.stringify(message));
				res.send(message)};
				if (chash!=user[0].phash){res.status(403);res.send({'error':'wrong password','auth':'false'})};
			};
		});	
	};
	if (!req.headers.authorization){
                res.status(403);
 		res.send({'error':'unauthorized - basic authorization header not found','auth':'false'})       
	};
   },
   create: function (req, res) {
   function cb(err,message){
   if (message){res.send(message)}
   if (!message){
	res.status(400);   
	res.send(err)};
   };
   //console.log(req.session);
   if (req.route.method=='post'){
	//---
	if (req.route.method=='post'){	
		if (req.body.key!=undefined && req.body.code!=undefined){	
		
			var cpt =  require('../../js/captcha.js');
			//console.log(cpt.decrypt(req.body.key));
                	if (req.body.code == cpt.decrypt(req.body.key)) {
			//res.send({'response':'code ok'})}
				sails.models.users.create(req.body,cb);}
			if (req.body.code != cpt.decrypt(req.body.key)) {
			res.send({'response':'invalid code1'})}
    		}
	//console.log(req.body.code=='undefined');
	if (req.body.key  == undefined){res.send({'response':'invalid code2'})};
	if (req.body.code == undefined){res.send({'response':'invalid code3'})};
	}
        if (req.route.method!='post'){res.send({'response':'invalid method:'+req.route.method})};
        //---
   }
   if (req.route.method!='post'){res.status(400);res.send({'error':'wrong method, should be post'})}
   },
   find: function(req,res){
    function cb(err,message){
    if (message){
        //console.log(message);
        if(message.length>0){
        message[0].phash = 'protected'
        res.send(message)};
        if(message.length===0){
        res.status(400)
        res.send({'error':'record not found','id':req.query.id})};
    };
    if (!message){
	res.status(400);   
	res.send(err)};
    };
    if (!req.headers.skey){res.status(403);res.send({'error':'not authorized','auth':false})};
    if (!req.query.id){
    res.status(403);    
    res.send({'error':'access denied'})};
    if (req.query.id && req.headers.skey===sails.config.authcfg.skey){
        sails.models.users.find(req.query,cb)
    };
  },
  update: function(req,res){
  var recid = req.url.split('/')[2]
  function cb(err,message){
    if (message){
        res.send(message)};
    if (!message){
	res.status(400);   
	res.send(err)};
    };
    if (req.body.phash) {res.status(403);res.send({'error':'not authorized/can not change PHASH','auth':false})
    } else {
    if (!req.headers.skey){
    res.status(403);    
    res.send({'error':'access denied'})};
    if (req.headers.skey==sails.config.authcfg.skey){
        sails.models.users.update(recid,req.body,cb)
    };
    if (req.headers.skey!=sails.config.authcfg.skey){
        res.status(403);res.send({'error':'not authorized','auth':false});
    }};
  },
  destroy: function(req,res) {res.status(403);res.send({'error':'not authorized','auth':false});
  },
  findOne: function(req,res) {res.status(403);res.send({'error':'not authorized/ find ID required','auth':false});
  },
  findOrCreate: function(req,res) {res.status(403);res.send({'error':'not authorized/ find ID required','auth':false});
  }
}
