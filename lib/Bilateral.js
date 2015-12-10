import Animal from './Animal';

export default class Bilateral extends Animal {
   //name, symmetry
  constructor ( name, body ) {
    super ( name, 'bilateral' );
    this._name = name;
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body ( isBody ) {
    this._body = isBody;
  }
}