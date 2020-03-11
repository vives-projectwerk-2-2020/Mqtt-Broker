
var mqtt = require('mqtt');
var host = 'mqtt://172.16.101.26',
    port = '1883';

// var settings = {
//     username: 'root',
//     password: 'secret'
// }
// var client = mqtt.connect(host, settings);

var client = mqtt.connect(host);

client.on('connect', function(){
    console.log('connected');
    setInterval(function(){
        client.publish('Firsttry', 'Hello mqtt');
    }, 5000);
});