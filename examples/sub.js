var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1234');
var topic = 'test';

client.on('message', (topic, payload)=>{
    payload = payload.toString();
    console.log(payload);
})

client.on('connect', ()=>{
    client.subscribe(topic);
})