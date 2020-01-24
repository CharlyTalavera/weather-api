const request = require('request-promise')


module.exports = {
    currentByCityname: function (city, country) {
        return request({
            method: 'get',
            uri: `${process.env.WEATHER_API_URL}/weather?q=${city},${country}&appid=${process.env.OPEN_WEATHER_APP_ID}`,
            json: true
        })
    },

    currentByCoodinates: function (lat, lon) {
        return request({
            method: 'get',
            uri: `${process.env.WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_APP_ID}`,
            json: true
        })
    },

    forecastByCitycame: function (city, country) {
        return request({
            method: 'get',
            uri: `${process.env.WEATHER_API_URL}/forecast?q=${city},${country}&appid=${process.env.OPEN_WEATHER_APP_ID}`,
            json: true
        })
    },

    forecastByCoordinates: function (lat, lon) {
        return request({
            method: 'get',
            uri: `${process.env.WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_APP_ID}`,
            json: true
        })
    }
    
}