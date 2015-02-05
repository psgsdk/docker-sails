// auth server configuration variables
/*************************************
* redisport - Redis server port - used for authorization keys storage
* redisip   - Redis server ip
* authtime  - max time for authorization after login; 0 = forever / n seconds
* skey      - key to access the server for get/find operations - send as SKEY header
* cptpass   - captcha key encrypt/decrypt password
*
*
*************************************/

module.exports.authcfg = {
    redisport: 6379,
    redisip: process.env.REDIS_PORT_6379_TCP_ADDR,
    authtime: 60,
    skey: 'xyz',
    cptpass: 'Cd6F3Efeq*_1~'
};


