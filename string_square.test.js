const string_square = require('./string_square').string_square

const stringa = 'prova';
const stringa_vuota = '';
const stringa_null = null;
var stringa_undefined;


//VALIDI

test('parametro passato è una stringa', () => {
	expect(string_square(stringa)).toBe(25);
});

test('parametro passato è una stringa vuota', () => {
	expect(string_square(stringa_vuota)).toBe(0);
});


//NON VALIDI

test('parametro passato è null', () => {
	expect(string_square(stringa_null)).toBe(-1);
});

test('parametro non passato', () => {
	expect(string_square()).toBe(-1);
});

test('parametro undefined', () => {
	expect(string_square(stringa_undefined)).toBe(-1);
});

test('parametro non stringa', () => {
	expect(string_square(200)).toBe(-1);
});