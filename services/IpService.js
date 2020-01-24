const request = require('request-promise')


module.exports = {
    getLocation: function (ip){
        return request ({
            method: 'get',
            uri: `${process.env.IP_URL}/${ip}`,
            json: true
        });
    }
}