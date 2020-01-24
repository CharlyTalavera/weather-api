const request = require('request-promise')


module.exports = {
    getByCityName: function (city, country) {
        return request({
            method: 'get',
            uri: `${process.env.WEATHER_API_URL}?q=${city},${country}&appid=${process.env.OPEN_WEATHER_APP_ID}`,
            json: true
        })
    },

    getByCoordinates: function (lat, lon) {
        return request({
            method: 'get',
            uri: `${process.env.WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_APP_ID}`,
            json: true
        })
    }
    
}