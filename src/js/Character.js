const allowedType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    if (!name || !type) {
      throw new Error('Данных нет');
    }

    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Данные некорректны');
    }

    if (allowedType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Данные некорректны');
    }

    this.health = 100;
    this.level = 1;
  }
}
