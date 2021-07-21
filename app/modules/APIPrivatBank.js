const emoji = require('../../static/emoji.json');
const PBCurrentCurrency = require('./PBCurrentCurrency');
const PBYesterdayCurrency = require('./PBYesterdayCurrency');
const findMoveCurrency = require('../helpers/findMoveCurrency');

const APIPrivatBank = async (bot, id, query) => {
    try {
        let resultC, resultY;
        resultC = await PBCurrentCurrency(query);
        if(resultC){
            resultY = await PBYesterdayCurrency(resultC.ccy);
        }
        if(resultY){
            const buyMove = findMoveCurrency(resultC.buy, resultY[0].saleRateNB);
            const saleMove = findMoveCurrency(resultC.sale, resultY[0].purchaseRateNB);

            const md = `${emoji.currency[resultC.ccy]} ${resultC.ccy} => ${emoji.currency[resultC.base_ccy]} ${resultC.base_ccy}
            Buy - ${buyMove} ${parseFloat(resultC.buy)}
            Sale - ${saleMove} ${parseFloat(resultC.sale)}
            `;
            await bot.sendMessage(id, md, {parse_mode: 'Markdown'});
        }


    } catch (err) {
        console.log(err)
        await bot.sendMessage(id, `${err.message} ${emoji.signs.sad}!`, {
            parse_mode: 'Markdown',
        });
    }
};
module.exports = APIPrivatBank;