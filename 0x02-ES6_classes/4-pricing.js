import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /* create a getter setter for amount */
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /* create a get and set for currency */
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  /* method that displays full price */
  displayFullPrice() {
    return (`${this._amount} ${this.currency.displayFullCurrency()}`);
  }

  /* static methd */
  static convertPrice(amount, conversionRate) {
    if (typeof (amount || conversionRate) !== 'number') {
      throw new TypeError('amount and conversionRate should be numbers');
    }
    return (amount * conversionRate);
  }
}
