const API = 'https://api.exchangeratesapi.io/latest'; //API adress where we can get in real time all the convertion in diferent currencies
const DEFAULT_TO_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY'];  //Goal currencies in wich we want the convertion. If a currency goal is also the base currency,
//then the program doesn't show this goal currency.


module.exports = {
  API,
  DEFAULT_TO_CURRENCIES
}
