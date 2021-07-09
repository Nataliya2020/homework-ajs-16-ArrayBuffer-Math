import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }

  set stoned(value) {
    this.stonedNew = value;
  }

  get stoned() {
    return this.stonedNew;
  }

  set attackNew(numberOfCells) {
    this.numberOfCells = numberOfCells;
  }

  get attackNew() {
    const attackFromADistance = Math.trunc(this.attack * (1 - (this.numberOfCells - 1) / 10));

    if (this.stoned) {
      this.NewAttack = Math.trunc(attackFromADistance - Math.log2((this.numberOfCells)) * 5);
    } else {
      this.NewAttack = attackFromADistance;
    }

    if (this.NewAttack <= 0) {
      this.NewAttack = 0;
    }

    return this.NewAttack;
  }
}
