const request = require('request-promise')

module.exports = {

    'GET /current' : async (req, res) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress.split(":").pop();
        const ipInfo = await IpService.getLocation(ip);

        const weatherInfo = await WeatherService.getByCityName(ipInfo.city, ipInfo.countryCode);
        return res.status(200).json(weatherInfo)
    },

    'GET /city': async (req, res) => {
        if(req.query.name){
            const weatherInfo = await WeatherService.getByCityName(req.query.name);
            return res.status(200).json(weatherInfo);
        }
        if(req.query.lat && req.query.lon){
            const weatherInfo = await WeatherService.getByCoordinates(req.query.lat, req.query.lon);
            return res.status(200).json(weatherInfo);
        }

        return res.status(400).json({
            msg: `Provide a name or latituted or longitud to make request.`
        })
    }

}