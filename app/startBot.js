const startBot = (bot) => {
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

}

module.exports = startBot;