var mosca = require('mosca');

const mqttPort = 1883;

var moscaSettings ={port:1883}

var server = new mosca.Server(moscaSettings);

//     var authenticate = function(client,username,password,callback){
//     console.log('trying to authorize');
//     var authorized =(username === 'root' && password.toString() === 'secret');
//     if(authorized) client.user = username;
//     callback(null, authorized);
// }


// var authorizePublish = function(client,topic,payload,callback){
//     callback(null, client.user == topic.split('/')[1]);

// }

// var authorizeSubscribe = function(client,topic,callback){
//     callback(null, client.user == topic.split('/')[1]);
// }

server.on('ready', function(){
    console.log("ready");
});
server.on('clientConnected', function(client){
    // server.authenticate()
    console.log('Client "${client.id}" connected' ) 
});
server.on('clientDisconneted', function(client){
    console.log('Client "${client.id}" disconnected');
})


server.on('published', function(packet,client){
    console.log('Published:', packet.payload);
});

server.on('ready',setup);
function setup(){
    console.log("Mosca mqtt server is up and running");
    // console.log(ascii);
    // server.authenticate = authenticate;
    // server.authorizePublish = authorizePublish;
    // server.authorizeSubscribe = authorizeSubscribe;
}