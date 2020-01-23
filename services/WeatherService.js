const request = require('request-promise')


module.exports = {
    getByCityName: function (city, country) {
        return request({
            method: 'get',
            uri: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.OPEN_WEATHER_APP_ID}`,
            json: true
        })
    },

    getByCoordinates: function (lat, lon) {
        return request({
            method: 'get',
            uri: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_APP_ID}`,
            json: true
        })
    }
    
}