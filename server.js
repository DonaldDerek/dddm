var path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var staticRoot = path.join(__dirname+'/public/');

//Expose static content
app.use(express.static('public'));

//Routes
app.get('/', function(req, res){
    res.sendFile(staticRoot+"index.html");
});

server.listen(3000,function(){
    var port = server.address().port;
    var host = server.address().address;
    (host == '::') ? host = 'localhost' : host = host;
    console.log('DDDMS in service on: http://%s:%s',host, port);
});
