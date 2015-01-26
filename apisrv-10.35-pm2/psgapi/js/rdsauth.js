var redis = require("redis")

module.exports = {
   setkey: function(rkey,rvalue){
    var callback = function (err, data) {
    if (err) {return 'error'};
        client.expire(rkey, sails.config.authcfg.authtime);
        client.end()
        return data;
    };
    client = redis.createClient(sails.config.authcfg.redisport,sails.config.authcfg.redisip,{parser:'javascript'});
    client.set(rkey, rvalue, callback);
},
   getkey: function(rkey,rcb){
    var callback = function (err, data) {
    if (err) {rcb(err,data)};
        client.end()
        rcb(err,data);
    };
    client = redis.createClient(sails.config.authcfg.redisport,sails.config.authcfg.redisip,{parser:'javascript'});
    client.get(rkey, callback);
}
}

