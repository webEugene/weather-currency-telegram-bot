const emoji = require('../../static/emoji.json');
const WeatherService = require('../services/weather.service');
const kelvinToCelsiusConvertor = require('../helpers/kelvinToCelsiusConvertor');
const changeDescription = require('../helpers/changeDescription');

const APIWheather = async (bot, id) => {
    try {
        const getWeather = await WeatherService.getWeatherData()
            .then(response => {
                return response.data;
            }).catch(err => {
                console.log(err);
            });
        if (!getWeather || undefined === getWeather) throw new Error('Something wrong with modules url!');
        const md = `${emoji.signs.location} ${getWeather.name}, ${getWeather.sys.country}
        ${getWeather.weather[0].description} ${
            emoji.weather[changeDescription(getWeather.weather[0].description)]
        } Temp:  ${kelvinToCelsiusConvertor(getWeather.main.temp)}°C
         Feels like:  ${kelvinToCelsiusConvertor(getWeather.main.feels_like)}°C
        `;
        await bot.sendMessage(id, md, {parse_mode: 'Markdown'});
    } catch (err) {
        bot.sendMessage(id, `Weather api is out of order ${emoji.signs.sad}!`, {
            parse_mode: 'Markdown',
        });
    }
}

module.exports = APIWheather;