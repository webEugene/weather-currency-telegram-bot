const axios = require('axios');
const yesterdayDate = require('../helpers/yesterdayDate');

class PrivatbankService {
    static getYesterdayCurrencies() {
        return axios.get(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${yesterdayDate}`);
    }
    static getCurrentCurrencies() {
        return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`);
    }
}

module.exports = PrivatbankService;