import Eukaryota from './Eukaryota';

export default class Plant extends Eukaryota {
  //name, uniCellular, asexual, mobile, heterotroph
  constructor ( name ) {
    super ( name, false, true, false, false );
    this._name = name;
  }
}