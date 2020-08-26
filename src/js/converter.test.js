import converter from './converter';

test('converter function exists', () => {
  expect(converter).toBeDefined();
});

test('return type of analyze is an object', () => {
  expect(typeof converter(21)).toBe('object');
});

test('converter function returned object converts celcius value to farenheit', () => {
  expect(converter(21).farenheit).toEqual(69);
});

test('converter function returned object converts -ve celcius value to farenheit', () => {
  expect(converter(-21).farenheit).toEqual(-6);
});

test('converter function returned object converts km/h value to mph', () => {
  expect(converter(2).mph).toEqual(1);
});

test('converter function returned object converts -ve km/h value to mph', () => {
  expect(converter(-2).mph).toEqual(-2);
});
