export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  /* getter and setter for sqft */
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
