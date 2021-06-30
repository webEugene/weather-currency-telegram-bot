const emoji = require('../../static/emoji.json');
const axios = require('axios');

const APIPrivatBank = async (bot, id, query) => {
    try {
        const getCurrencies = await axios.get(
            'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
        );

        if (!getCurrencies) throw new Error('Something wrong with api url!');

        const result = getCurrencies.data.find((item) => item.ccy === query);

        const md = `${emoji.currency[result.ccy]} ${result.ccy} => ${emoji.currency[result.base_ccy]} ${result.base_ccy}
            Buy - ${parseFloat(result.buy)}
            Sale - ${parseFloat(result.sale)}
            `;
        await bot.sendMessage(id, md, {parse_mode: 'Markdown'});

    } catch (err) {
        await bot.sendMessage(id, `Privat Currency Bot is out of order ${emoji.signs.sad}!`, {
            parse_mode: 'Markdown',
        });
        console.error(`${err.name}: ${err.message}`);
    }
};
module.exports = APIPrivatBank;