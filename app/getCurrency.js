const emoji = require('../static/emoji.json');

const getCurrency = (bot, id) => {
    bot.sendMessage(id, `Choose currency`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: `${emoji.currency.EUR} EUR`,
                        callback_data: 'EUR',
                    },
                    {
                        text: `${emoji.currency.USD} USD`,
                        callback_data: 'USD',
                    },
                ],
            ],
        },
    });
};

module.exports = getCurrency;