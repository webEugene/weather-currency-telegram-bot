const PrivatbankService = require('../services/privatbank.service');

const PBCurrentCurrency = async (query) => {
    const getCurrencies = await PrivatbankService.getCurrentCurrencies()
        .then(response => {
            return response.data;
        }).catch(err => {
            console.log(err);
        });

    if (!getCurrencies || undefined === getCurrencies) throw new Error('Something wrong with modules url!');
    const givenCurrencies = getCurrencies.find((item) => item.ccy === query);

    return givenCurrencies;

};
module.exports = PBCurrentCurrency;