var CronJob = require('cron').CronJob;
var config = require('./config.js');
var pinger = require('./pinger.js');
var getMac = require('getmac');

var request = require('request');

var log = () => {
    getMac.getMac(function(err, macAddress){
        if (err)  throw err
        pinger.ping(config.targets)
        .then((t) => {
            var payload = { source: macAddress, time: new Date(), targets: t};
            request({
                method: 'POST',
                json: true,
                url: config.url,
                body: payload
            }, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    console.log(`logged at ${new Date}`);
                }
            });
        });
    });
};

console.log(`Running every ${config.interval} milliseconds...`);
log();
setInterval(() => {
    log();
}, config.interval);