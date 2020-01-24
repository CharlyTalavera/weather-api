
const requireDir = require('require-dir');

const servicesMocks = requireDir('../services-mocks');

const models = requireDir('../models');

const server = require('../init_server');

const request = require('supertest');

var should = require('should');

for (const model of Object.keys(models)){
    global[model] = models[model];
}

for (const service of Object.keys(servicesMocks)){
        global[service] = servicesMocks[service];
}


describe('Info', function(){
    describe('/status', function(){
        it('Should return a 200 status code', function(){
            request(server)
            .get('/status')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
            })
        })
    })
    describe('/location', function(){
        it('Should return valid latitude and longitude', function(){
            request(server)
            .get('/location')
            .set('x-forwarded-for', '190.19.129.155')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                res.body.should.have.property('lat', -34.815);
                res.body.should.have.property('lon', -58.4792);
                res.body.should.have.property('name', "Monte Grande, Buenos Aires, Argentina");
            });
        })
    })
})
describe('Weather', function(){
    describe('/current', function(){
        it('Should return valid weather info with correct status code', function(){
            request(server)
            .get('/current')
            .set('x-forwarded-for', '190.19.129.155')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                res.body.should.have.property('main', 'Clouds');
                res.body.should.have.property('description', 'overcast clouds');
                res.body.should.have.property('temp', 22);        
            });
        })
    })
    describe('/city with name', function (){
        it('Should return valid weather info with correct status code', function(){
            request(server)
            .get('/city?name=Ezeiza')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                res.body.should.have.property('main', 'Clouds');
                res.body.should.have.property('description', 'overcast clouds');
                res.body.should.have.property('temp', 22); 
            });
        })
    })  
    describe('/city with lat and lon', function (){
        it('Should return valid weather info with correct status code', function(){
            request(server)
            .get('/city?lat=-34.85&lon=-58.52')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                res.body.should.have.property('main', 'Clear');
                res.body.should.have.property('description', 'clear sky');
                res.body.should.have.property('temp', 27); 
            });
        })
    }) 

    
    
});

describe('City', function (){
    describe('/city/search with query search', function () {
        it('should return a valid array response', function() {
            const city = {
                name: 'Laguna Blanca,  Formosa Province,  Argentina',
                lat: -25.1266785,
                lon: -58.24466529999999
                };
            request(server)
            .get('/city/search?q=Laguna+Blanca')
            .expect('Content-Type', /json/)
            .expect(200)        
            .end(function(err, res) {
                should.not.exist(err);
                res.body.should.containEql(city);
            });    
        })
    })

})
    
console.log("Test sucessfull...")