/**
 * XMyController
 *
 * @description :: Server-side logic for managing mies
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var redis = require("redis")

module.exports = {
   /**
   * CommentController.create()
   */
  message: function (req, res) {
    return res.send("Hi there!")
  },
  ask: function (req, res) {
    return res.send("What's up!")
  },
  sred: function(req,res) {
  var rkey = "cucu25"
  var callback = function (err, data) {
    if (err) {return res.send('error rds')};
    //console.log(data);
    client.expire(rkey, 15);
    client.end()
    res.send('OK - redis msg:' + data);
  };

  //console.log(req);
  //console.log(sails.config.authcfg.author);
  client = redis.createClient(sails.config.authcfg.redisport,sails.config.authcfg.redisip,{parser:'javascript'});
  client.set(rkey, "paispe23", callback);
  }	
};

