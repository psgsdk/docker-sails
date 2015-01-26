module.exports = {
  getcaptcha: function(req,res){
	var cpt =  require('../../js/captcha.js');
	var gcode = cpt.getcode();
	var cpict = cpt.cnv(gcode);
	var key   = cpt.encrypt(gcode)
	res.send({'captcha':cpict,'key':key,'code':gcode});
  },
  checkcaptcha: function(req,res){
	if (req.route.method=='post'){	
	if (req.body.key!=undefined && req.body.code!=undefined){	
		
		var cpt =  require('../../js/captcha.js');
		//console.log(cpt.decrypt(req.body.key));
                if (req.body.code == cpt.decrypt(req.body.key)) {
			res.send({'response':'code ok'})}
		if (req.body.code != cpt.decrypt(req.body.key)) {
			res.send({'response':'invalid code1'})}
    	}
	//console.log(req.body.code=='undefined');
	if (req.body.key  == undefined){res.send({'response':'invalid code2'})};
	if (req.body.code == undefined){res.send({'response':'invalid code3'})};
	}
        if (req.route.method!='post'){res.send({'response':'invalid method:'+req.route.method})};
  }
}
