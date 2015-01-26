var crypto = require('crypto'),
algorithm = 'aes-256-ctr',
password  = sails.config.authcfg.cptpass
//password  = 'Cd6F3Efeq*_1~';

module.exports = {
  checkcode: function(ccode,encstr,cobj){
  if (ccode == cobj.decrypt(encstr)){return true};
  if (ccode != cobj.decrypt(encstr)){return false};
  },
  getcode: function(){
  var ccode = ""
  vr    =    Math.floor((Math.random() * 10000) + 1);
  ccode +=    String.fromCharCode(65+vr - Math.floor(vr/25)*25);
  vr  =    Math.floor((Math.random() * 10000) + 1);
  ccode +=    String.fromCharCode(65+vr - Math.floor(vr/25)*25);
  vr  =    Math.floor((Math.random() * 10000) + 1);
  ccode +=    String.fromCharCode(65+vr - Math.floor(vr/25)*25);
  vr  =    Math.floor((Math.random() * 10000) + 1);
  ccode +=    String.fromCharCode(65+vr - Math.floor(vr/25)*25);
  return ccode
  },
  encrypt: function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
  },
  decrypt: function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  try {
            var dec = decipher.update(text,'hex','utf8');
            dec += decipher.final('utf8');
            return dec;
        } catch (ex) {
             return "error:wet";
        }
    },
  cnv: function(cstring){

var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(130,75)
  , ctx = canvas.getContext('2d');

for (i=1;i<76;i++){
    
    var rgb = 'rgba(153,203,' + (253-i*2).toString()+',1)'
    ctx.strokeStyle = rgb
    ctx.beginPath();
    ctx.lineTo(0,i);
    ctx.lineTo(130,i);
    ctx.stroke();
};

Math.random()

fchar = cstring[0]
hr =    Math.floor((Math.random() * 10) + 1);
vr =    Math.floor((Math.random() * 10000) + 1);
vr =    vr - Math.floor(vr/25)*25
ctx.font = '20px Arial';
ctx.fillStyle = 'rgb(150,0,0)'
ctx.fillText(fchar, 15+hr, 35+vr);

fchar = cstring[1]
hr =    Math.floor((Math.random() * 10) + 1);
vr =    Math.floor((Math.random() * 10000) + 1);
//vr =    vr - Math.floor(vr/25)*25
vr =25
ctx.font = '20px Arial';
ctx.fillStyle = 'rgb(0,30,190)'
ctx.fillText(fchar, 45+hr, 25+vr);


fchar = cstring[2]
hr =    Math.floor((Math.random() * 10) + 1);
vr =    Math.floor((Math.random() * 10000) + 1);
vr =    vr - Math.floor(vr/25)*25
ctx.font = '20px Arial';
ctx.fillStyle = 'rgb(0,0,150)'
ctx.fillText(fchar, 85+hr, 20+vr);

fchar = cstring[3]
hr =    Math.floor((Math.random() * 10) + 1);
vr =    Math.floor((Math.random() * 10000) + 1);
vr =    vr - Math.floor(vr/25)*25
ctx.font = '20px Tahoma';
ctx.fillStyle = 'rgb(150,0,190)'
ctx.fillText(fchar, 105+hr, 20+vr);


for (i=0;i<12;i++){
    
    var rgb = 'rgba(5,7,' + (253-i*10).toString()+',1)'
    ctx.strokeStyle = rgb
    ctx.beginPath();
    ctx.lineTo(0,i*7);
    ctx.lineTo(90,85);
    ctx.stroke();
};

for (i=0;i<13;i++){
    
    var rgb = 'rgba(5,' + (253-i*10).toString()+',7,1)'
    ctx.strokeStyle = rgb
    ctx.beginPath();
    ctx.lineTo(i*10,0);
    ctx.lineTo((i+1)*10,76);
    ctx.stroke();
};

for (i=0;i<13;i++){
    
    var rgb = 'rgba(' + (253-i*10).toString()+',50,70,1)'
    ctx.strokeStyle = rgb
    ctx.beginPath();
    ctx.lineTo((i+1)*10,0);
    ctx.lineTo(i*10,76);
    ctx.stroke();
};

//var fs = require('fs')
//  , out = fs.createWriteStream('./test/text.png')
//  , stream = canvas.pngStream();

//stream.on('data', function(chunk){
//  out.write(chunk);
//});

//stream.on('end', function(){
//  console.log('saved png');
//});

return canvas.toDataURL()
}
}
