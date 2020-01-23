const server = require('express')();

const requireDir = require('require-dir');

const controllers = requireDir('./controllers');

const services = requireDir('./services');

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

for (const service of Object.keys(services)){
    global[service] = services[service];
}

server.listen(1337, () => {
    console.log("running on port 1337...")
})

