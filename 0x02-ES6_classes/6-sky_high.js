import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /* getter and setter for floor */
  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = value;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this._floors} floors`);
  }
}
