const emoji = require('../../static/emoji.json');
const axios = require('axios');
const kelvinToCelsiusConvertor = require('../helpers/kelvinToCelsiusConvertor');
const changeDescription = require('../helpers/changeDescription');

const APIWheather = async (bot, id) => {
    try {
        const getWeather = await axios.get(
            'https://api.openweathermap.org/data/2.5/weather?q=kiev&appid=0c3da97ce90594979c115091885dc53c'
        );
        if (!getWeather) throw new Error('Something wrong with api url!');
        const result = getWeather.data;
        const md = `${emoji.signs.location} ${result.name}, ${result.sys.country}
        ${result.weather[0].description} ${
            emoji.weather[changeDescription(result.weather[0].description)]
        } Temp:  ${kelvinToCelsiusConvertor(result.main.temp)}°C
        `;
        await bot.sendMessage(id, md, {parse_mode: 'Markdown'});
    } catch (err) {
        bot.sendMessage(id, `Weather api is out of order ${emoji.signs.sad}!`, {
            parse_mode: 'Markdown',
        });
    }
}

module.exports = APIWheather;