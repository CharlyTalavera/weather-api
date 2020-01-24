
module.exports = {

    'GET /city/search': async (req, res) => {
         const result = await GoogleService.searchCity(req.query.q);

         return res.status(200).json(result ? result.results.map(result => new City(result.formatted_address, result.geometry.location.lat, result.geometry.location.lng)) : []);
    }
}