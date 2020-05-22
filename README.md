# Mqtt-Broker
![Docker Image CI](https://github.com/vives-projectwerk-2-2020/Mqtt-Broker/workflows/Docker%20Image%20CI/badge.svg)

This repository contains the mqtt broker used for realtime data transmission between the lorawan listener and the frontend application.
Currently, the broker will be run on the users localhost, this can be changed by changing the host variable in `broker.js`. 
Same goes for connecting a client or publisher.

## Installation guide

To be able to use the mqtt broker you must complete the following steps. 

* Clone the repo into your local folder with `git clone`
* Run the command `npm i`
* Run broker.js with the command `node broker.js`
* The broker is now running on your device

## Examples
In the examples map you can find examples of a basic publisher and client integrated in a frontend, the view engine for data in frontend is ejs.
To use these examples yourself, you can change the `topic` variable in `pub.js`. Do the same for the `topic` variable in sub.js. 
After you run the `pub.js` file with the command `node pub.js`.

Now you have a publisher running which uploads the message `hello world` every 5 seconds. You can change this message to any value you see fit.
To be able to display the published values in the frontend of your webapplication you need to grab the code from `sub.js` and change the topic to the topic your publisher has.
After you have done this you are subscribed to your publisher and you can use the values you have received as you see fit.


