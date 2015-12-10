import Animal from './Animal';

export default class Cnidarian extends Animal {
   //name, symmetry
   constructor ( name ) {
    super ( name, 'radial' );
    this._name = name;
   }
}