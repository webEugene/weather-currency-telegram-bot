const PrivatbankService = require('../services/privatbank.service');

const PBYesterdayCurrency = async (currency) => {
    const getYesterdayCurrencies = await PrivatbankService.getYesterdayCurrencies().then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err);
        });

    if (!getYesterdayCurrencies || undefined === getYesterdayCurrencies) throw new Error('Privat Bank services unavailable');
    if (0 === getYesterdayCurrencies.exchangeRate.length) throw new Error('Data is empty or in the process of updating');
    const givenCurrencies = getYesterdayCurrencies.exchangeRate.filter((item) => {
        if (currency === item.currency) {
            return item;
        }
    });

    return givenCurrencies;

};
module.exports = PBYesterdayCurrency;