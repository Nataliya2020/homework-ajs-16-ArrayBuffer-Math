import Character from '../Character';

test('checking the correctness of the object creation', () => {
  expect(new Character('Ivan', 'Undead')).toEqual({
    name: 'Ivan',
    type: 'Undead',
    health: 100,
    level: 1,
  });
});

test('checking the name and type without data', () => {
  expect(() => new Character()).toThrow();
});

test('checking for a name less than 2', () => {
  expect(() => new Character('a', 'Swordsman')).toThrow();
});

test('checking for a name longer than 10', () => {
  expect(() => new Character('prepositions', 'Swordsman')).toThrow();
});

test('checking for recognition of the type name  error', () => {
  expect(() => new Character(1, 'Swordsman')).toThrow();
});

test('checking for recognition of the type with an error', () => {
  expect(() => new Character('name', 'Sportsmen')).toThrow();
});
