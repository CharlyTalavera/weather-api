

module.exports = class Weather {
    constructor(weatherInfo){
        this.main = weatherInfo.weather[0].main;
        this.description = weatherInfo.weather[0].description;
        this.temp = Math.round(weatherInfo.main.temp - 273.15, 2); // Convert from kelvin to celsius
    }
}