var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://172.16.101.26');

client.on('connect', function(){
    client.subscribe('Firsttry')
});
client.on('message', function(topic, message){
    context = message.toString();
    console.log(context);
});