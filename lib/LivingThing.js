export default class LivingThing {

  constructor ( name, uniCellular, trueNucleus, anaerobic, asexual, mobile ) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name () {
    return this._name;
  }

  set name ( thingName ) {
      this._name = thingName;
  }

  get uniCellular () {
    return this._uniCellular;
  }

  set uniCellular ( isUniCellular ) {
      this._uniCellular = isUniCellular;
  }

  get multiCellular () {
    return !this._uniCellular;
    }

  set multiCellular ( isMultiCellular ) {
    this._uniCellular = !isMultiCellular;
  }

  get eukaryote () {
    return this._trueNucleus;
  }

  set eukaryote ( isEukaryote ) {
      this._trueNucleus  = isEukaryote;
    }

  get prokaryote () {
    return !this._trueNucleus;
  }

  set prokaryote ( isProkaryote ) {
    this._trueNucleus = !isProkaryote;
  }

  get anaerobic () {
    return this._anaerobic;
  }

  set anaerobic ( isAnaerobic ) {
      this._anaerobic = isAnaerobic;
    }

  get aerobic () {
    return !this._anaerobic;
  }

  set aerobic ( isAerobic ) {
    this._anaerobic = !isAerobic;
  }

  get asexual () {
    return this._asexual;
  }

  set asexual ( isAsexual ) {
    this._asexual = isAsexual;
  }

  get sexual () {
    return !this._asexual;
  }

  set sexual ( isSexual ) {
    this._asexual = !isSexual;
  }

  get mobile () {
    return this._mobile;
  }

  set mobile ( isMobile ) {
      this._mobile = isMobile;
    }


  get immobile () {
    return !this._mobile;
  }

  set immobile ( isImmobile ) {
    this._mobile = !isImmobile;
  }

}