

module.exports = {

    'GET /status': (req, res) => {
        return res.sendStatus(200);
    },

    'GET /location': async (req, res) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress.split(":").pop();
        const ipInfo = await IpService.getLocation(ip);

        return res.json(ipInfo);
    }

}