import Eukaryota from './Eukaryota';

export default class Protista extends Eukaryota {
  //name, uniCellular, asexual, mobile, heterotroph
  constructor ( name, uniCellular, mobile, heterotroph ) {
    super ( name, uniCellular, true, mobile, heterotroph );
    this._name = name;
    this._uniCellular = uniCellular;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }
}