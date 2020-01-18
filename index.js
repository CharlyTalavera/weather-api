const server = require('express')();

const requireDir = require('require-dir');

const controllers = requireDir('./controllers');

const services = requireDir('./services');

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

