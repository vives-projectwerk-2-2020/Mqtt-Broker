var mosca = require('mosca')
var settings = {port:1234,
                host:'${DOMAIN}'}


var broker = new mosca.Server(settings)

broker.on('ready', ()=>{
    console.log('Broker is ready');
})

broker.on('published',(packet)=>{
    console.log(packet.payload.toString());
})