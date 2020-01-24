const request = require('request-promise')


module.exports = {
    currentByCityname: function (city, country) {
            return {"coord":{"lon":-58.24,"lat":-25.13},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"model","main":{"temp":295.18,"feels_like":295.06,"temp_min":295.18,"temp_max":295.18,"pressure":1009,"humidity":79,"sea_level":1009,"grnd_level":1000},"wind":{"speed":4.29,"deg":168},"clouds":{"all":100},"dt":1579785089,"sys":{"country":"AR","sunrise":1579771335,"sunset":1579819606},"timezone":-10800,"id":3427949,"name":"Laguna Blanca","cod":200}
    },

    currentByCoodinates: function (lat, lon) {
            return {"coord":{"lon":-58.52,"lat":-34.85},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":299.74,"feels_like":300.64,"temp_min":297.15,"temp_max":302.04,"pressure":1016,"humidity":74},"visibility":10000,"wind":{"speed":5.1,"deg":10},"clouds":{"all":0},"dt":1579785344,"sys":{"type":1,"id":8237,"country":"AR","sunrise":1579770239,"sunset":1579820836},"timezone":-10800,"id":3433975,"name":"Ezeiza","cod":200};
    }
    
}