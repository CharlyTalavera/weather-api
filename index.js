const requireDir = require('require-dir');

const services = requireDir('./services');

const models = requireDir('./models');

const server = require('./init_server');

for (const model of Object.keys(models)){
    global[model] = models[model];
}

for (const service of Object.keys(services)){
    global[service] = services[service];
}

server.listen(1337, () => {
    console.log("running on port 1337...")
})

