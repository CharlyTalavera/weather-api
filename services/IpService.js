const request = require('request-promise')


module.exports = {
    getLocation: function (ip){
        return request ({
            method: 'get',
            uri: `http://ip-api.com/json/${ip}`,
            json: true
        });
    }
}