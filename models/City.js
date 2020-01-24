

module.exports = class City{
    constructor(name, lat, lon){
        this.name = name.split(',').slice(-3).join(', ');
        this.lat = lat;
        this.lon = lon;
    }
}