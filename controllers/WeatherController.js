const request = require('request-promise')

module.exports = {

    'GET /current' : async (req, res) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress.split(":").pop();
        const ipInfo = await IpService.getLocation(ip);

        const weatherInfo = await WeatherService.currentByCityname(ipInfo.city, ipInfo.countryCode);
        return res.status(200).json(new Weather(weatherInfo))
    },

    'GET /current/city': async (req, res) => {
        if(req.query.name){
            const weatherInfo = await WeatherService.currentByCityname(req.query.name);
            return res.status(200).json(new Weather(weatherInfo));
        }
        if(req.query.lat && req.query.lon){
            const weatherInfo = await WeatherService.currentByCoodinates(req.query.lat, req.query.lon);

            return res.status(200).json(new Weather(weatherInfo));
        }

        return res.status(400).json({
            msg: `Provide a name or latituted or longitud to make request.`
        })
    },

    'GET /forecast' : async (req, res) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress.split(":").pop();
        const ipInfo = await IpService.getLocation(ip);

        const forecast = await WeatherService.forecastByCitycame(ipInfo.city, ipInfo.countryCode);
        return res.status(200).json(forecast.list.map(weatherInfo => new Weather(weatherInfo)));
    },

    'GET /forecast/city': async (req, res) => {
        if(req.query.name){
            const forecast = await WeatherService.forecastByCitycame(req.query.name);
            return res.status(200).json(forecast.list.map(weatherInfo => new Weather(weatherInfo)));
        }
        if(req.query.lat && req.query.lon){
            const forecast = await WeatherService.forecastByCoordinates(req.query.lat, req.query.lon);
            
            return res.status(200).json(forecast.list.map(weatherInfo => new Weather(weatherInfo)));
        }

        return res.status(400).json({
            msg: `Provide a name or latituted or longitud to make request.`
        })
    }

}