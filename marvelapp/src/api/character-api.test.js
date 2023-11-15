const { getCharacters, getCharacterById } = require('./character-api');
const fs = require('fs');

describe('character-api', () => {
  const expected = JSON.parse(fs.readFileSync('src/data/characters.json', 'utf8'));

  describe('getCharacters', () => {
    test('returns an array of characters', () => {
      // when

      // then
      const characters = getCharacters();

      // expect
      expect(Array.isArray(characters)).toBe(true);
      expect(characters.length).toBe(expected.length);
    });

  });
});
