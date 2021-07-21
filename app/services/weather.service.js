const axios = require('axios');

class WeatherService {
    static getWeatherData() {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=kiev&appid=0c3da97ce90594979c115091885dc53c`);
    }
}

module.exports = WeatherService;