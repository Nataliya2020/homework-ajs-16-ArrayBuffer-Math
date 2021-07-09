import MathCharacter from '../MathCharacter';

describe('checking the calculation of the attack without stoned', () => {
  const Magician = new MathCharacter('Ivan', 'Magician');
  test('checking the correctness of the calculation of the attack without stoned value 1', () => {
    Magician.attackNew = 1;

    expect(Magician.attackNew).toBe(10);
  });

  test('checking the correctness of the calculation of the attack without stoned value 2', () => {
    Magician.attackNew = 2;

    expect(Magician.attackNew).toBe(9);
  });

  test('checking the correctness of the calculation of the attack without stoned value 3', () => {
    Magician.attackNew = 3;

    expect(Magician.attackNew).toBe(8);
  });

  test('checking the correctness of the calculation of the attack without stoned value 10', () => {
    Magician.attackNew = 10;

    expect(Magician.attackNew).toBe(0);
  });
});

describe('checking the attack calculation with stoned', () => {
  const Magician = new MathCharacter('Ivan', 'Magician');
  test('checking the attack calculation with stoned attack 1', () => {
    Magician.stoned = true;

    Magician.attackNew = 1;

    expect(Magician.attackNew).toBe(10);
  });

  test('checking the attack calculation with stoned attack 2', () => {
    Magician.stoned = true;

    Magician.attackNew = 2;

    expect(Magician.attackNew).toBe(4);
  });

  test('checking the attack calculation with stoned attack 3', () => {
    Magician.stoned = true;

    Magician.attackNew = 3;

    expect(Magician.attackNew).toBe(0);
  });

  test('checking the attack calculation with stoned attack 15', () => {
    Magician.stoned = true;

    Magician.attackNew = 15;

    expect(Magician.attackNew).toBe(0);
  });
});
