const server = require('express')();

const requireDir = require('require-dir');

const controllers = requireDir('./controllers');

server.use((req, res, next) => {
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
        server[method.toLowerCase()](path, controllers[controller][route]);

    }
}

module.exports = server;