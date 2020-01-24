const express = require('express');
const server = express();
const router = express.Router();

const requireDir = require('require-dir');

const controllers = requireDir('./controllers');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

for (const controller of Object.keys(controllers)){
    for (const route of Object.keys(controllers[controller])){
        const [method, path] = route.split(" ");

        console.log(`Binding route '${route}'...`)
        router[method.toLowerCase()](path, controllers[controller][route]);

    }
}

server.use(`${process.env.BASE_ENDPOINT}/${process.env.VERSION}`, router);
module.exports = server;