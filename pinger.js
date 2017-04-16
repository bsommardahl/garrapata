var ping = require('ping');

module.exports = {
    ping(targets){
        var promises = targets.map((t) => ping.promise.probe(t.address)
                .then((res) => {
                    res.name = t.name;
                    return res;
                }));
        return Promise.all(promises);
    }
};