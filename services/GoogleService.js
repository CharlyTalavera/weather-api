const request = require('request-promise')


module.exports = {
    searchCity: function( query ){
        return request({
            method: 'get',
            uri: `${process.env.GOOGLE_API_URL}?query=${query}&key=${process.env.GOOGLE_KEY}`,
            json: true
         });
    }
}