import Team from '../app';
import Character from '../character';

test('should add a character to the team', () => {
  const team = new Team();
  const character = new Character('John', 'Magician');
  team.add(character);
  expect(team.members.size).toBe(1);
  expect(team.members.has(character)).toBe(true);
});

test('should not add a duplicate character to the team', () => {
  const team = new Team();
  const character = new Character('John', 'Magician');
  team.add(character);
  expect(() => team.add(character)).toThrowError('Персонаж уже в команде!');
});

test('should add a character to the team', () => {
  const team = new Team();
  const character = new Character('John', 'Magician');
  team.add(character);
  expect(team.members.size).toBe(1);
  expect(team.members.has(character)).toBe(true);
});

test('should add multiple characters to the team', () => {
  const team = new Team();
  const character1 = new Character('John', 'Magician');
  const character2 = new Character('Bill', 'Undead');
  team.addAll(character1, character2);
  expect(team.members.size).toBe(2);
  expect(team.members.has(character1)).toBe(true);
  expect(team.members.has(character2)).toBe(true);
});

test('should not add a duplicate character to the team without an error message', () => {
  const team = new Team();
  const character1 = new Character('John', 'Magician');
  const character2 = new Character('Bill', 'Undead');
  team.addAll(character1, character2, character2);
  expect(team.members.size).toBe(2);
  expect(team.members.has(character1)).toBe(true);
  expect(team.members.has(character2)).toBe(true);
});

test('should convert the team to an array', () => {
  const team = new Team();
  const character1 = new Character('John', 'Magician');
  const character2 = new Character('Bill', 'Undead');
  team.addAll(character1, character2);
  const teamArr = team.toArray();
  expect(teamArr.length).toBe(2);
  expect(teamArr).toContain(character1);
  expect(teamArr).toContain(character2);
});
