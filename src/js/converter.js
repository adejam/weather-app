const toFarenheit = celsius => Math.floor(celsius * (9 / 5) + 32);

const toMph = speed => Math.floor(speed / 1.609);

const converter = value => ({
  farenheit: toFarenheit(value),
  mph: toMph(value),
});

export default converter;
