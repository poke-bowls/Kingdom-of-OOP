import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {
  //name, uniCellular, trueNucleus, anaerobic, asexual, mobile
  constructor ( name, uniCellular, asexual, mobile, heterotroph ) {
    super ( name, uniCellular, true, false, asexual, mobile );
    this._name = name;
    this._uniCellular = uniCellular;
    this._asexual = asexual;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph( isHeterotroph ) {
      this._heterotroph = isHeterotroph;
  }

  get autotroph() {
    return !this._heterotroph;
  }

  set autotroph( isAutotroph ) {
    this._heterotroph = !isAutotroph;
  }


}