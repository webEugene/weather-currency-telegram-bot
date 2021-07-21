require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});
const emoji = require('../static/emoji.json');
const getCurrency = require('./modules/getCurrency');
const APIPrivatBank = require('./modules/APIPrivatBank');
const APIWeather = require('./modules/APIWeather');

const main = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Welcome, make your choose...'},
    ])
    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, 'Welcome, make your choose...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: `${emoji.weather.weatherIcon} Weather`,
                            callback_data: '/weather',
                        },
                        {
                            text: `${emoji.signs.currency_sign} Currency PB`,
                            callback_data: '/currency',
                        },
                    ],
                ],
            },
        });
    });

    const switchQuery = (id, query) => {
        switch (query) {
            case '/currency':
                getCurrency(bot, id);
                break;
            case '/weather':
                APIWeather(bot, id);
                break;
            default:
                console.log('Nothing chosen!');
                break;
        }
    };

    bot.on('callback_query', async (query) => {
        const {id} = query.message.chat;
        const queryChosen = query.data;
        if (queryChosen === '/currency' || queryChosen === '/weather') {
            switchQuery(id, queryChosen);
        } else {
            APIPrivatBank(bot, id, queryChosen);
        }
    });
}
module.exports = main;
