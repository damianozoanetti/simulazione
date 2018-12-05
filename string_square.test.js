const string_square = require('./string_square').string_square

const stringa = 'prova'
const stringa_vuota = ''


//VALIDI

test('parametro passato è una stringa', () => {
	expect(string_square(stringa)).toBe(25);
});

test('parametro passato è una stringa vuota', () => {
	expect(string_square(stringa_vuota)).toBe(0);
});


//NON VALIDI
