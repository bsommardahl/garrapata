var CronJob = require('cron').CronJob;
var config = require('./config.js');
var pinger = require('./pinger.js');
var getMac = require('getmac');

getMac.getMac(function(err,macAddress){
    if (err)  throw err
    console.log("MAC Address", macAddress)
    pinger.ping(config.targets)
    .then((t) => {
        var payload = { source: macAddress, time: new Date(), config: config, targets: t};
        console.log(payload);
    });
})

// var job = new CronJob({
//   cronTime: config.cronTime,
//   onTick: function() {
//     pinger.ping();
//   },
//   start: false,
//   timeZone: config.timeZone
// });
// job.start();