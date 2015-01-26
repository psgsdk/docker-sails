// javascript for HASH, o_pop functions, uuid, xuids

module.exports = {
  base64: function(bstring,action){
  var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
  if (action=='e'){return Base64.encode(bstring)};
  if (action=='d'){return Base64.decode(bstring)};
  },
  xuid: function(){
  var d = new Date().getTime();
    var xuid_ = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(36);
    });
    return xuid_;
  },       
 uuid: function() {
    var d = new Date().getTime();
    var uuid_ = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(36);
    });
    return uuid_;  
  },
 o_pop: function(calculatestring){
 var o_pop = function(lnstr,lnvar,lnpos,lcstring)
 {
	if (lnpos > lnvar){
		iii = lnvar*7;
	}
	else {iii = lnvar*2};
	pgret = parseInt('1136894500164713450078365432'.substring((lnpos-1)*2,lnpos*2))
	hhh = pgret + iii - Math.floor((pgret+iii)/lnvar)*lnvar
	ttt = lcstring.charCodeAt(hhh)
	mmm = ttt + pgret + lnstr - Math.floor((ttt+pgret+lnstr)/25)*25
	return String.fromCharCode(65+mmm);
	};
	var calcr = function(lcstr){
		uuu = lcstr.trim().length
		goo = 0
		for (i = 0; i<uuu;i++){
			goo = goo + lcstr.charCodeAt(i)*i;
		}
		return goo
}
lncalc = calcr(calculatestring);
uuu = calculatestring.trim().length
finalstr = ""
for (i=1;i<15;i++){
   if (i==5 || i==10){}
   else{
       finalstr = finalstr + o_pop(lncalc,uuu,i,calculatestring)
   }
}
return finalstr

},
 hash: function(calculatestring,lnkeysize){
 var o_pop = function(lnstr,lnvar,lnpos,lcstring)
 {
	if (lnpos > lnvar){
		iii = lnvar*7;
	}
	else {iii = lnvar*2};
	pgret = parseInt('1136894519164713452378365432491863251956031744134837'.substring((lnpos-1)*2,lnpos*2))
	hhh = pgret + iii - Math.floor((pgret+iii)/lnvar)*lnvar
	ttt = lcstring.charCodeAt(hhh)
	mmm = ttt + pgret + lnstr - Math.floor((ttt+pgret+lnstr)/25)*25
	return String.fromCharCode(65+mmm);
	};
	var calcr = function(lcstr){
		uuu = lcstr.trim().length
		goo = 0
		for (i = 0; i<uuu;i++){
			goo = goo + lcstr.charCodeAt(i)*i;
		}
		return goo
  	}
  lncalc = calcr(calculatestring);
  uuu = calculatestring.trim().length
  finalstr = ""
  if (lnkeysize>26){lnkeysize=26};
  for (i=1;i<lnkeysize+1;i++){
     finalstr = finalstr + o_pop(lncalc,uuu,i,calculatestring)
  }
  return finalstr
 }
};


