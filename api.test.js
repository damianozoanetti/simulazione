const fetch = require('node-fetch');

const app = require('./api').app;

const url = 'http://localhost:8001';



beforeAll(function () {
  server = require('./api.js');
});

afterAll(function () {
  server.close();
});



test('works with GET /', () => {
	expect.assertions(1);
    return fetch(url)
        .then(r => expect(r.status).toEqual(200))
});

test('works with GET /square', () => {
	expect.assertions(1);
    return fetch(url+"/square?string=my_string")
        .then(r => expect(r.status).toEqual(200))
});

test('GET /square?string=hello should return 200 and result property in body', () => {
  return fetch(url + '/square?string=hello')
    .then(response => {
      expect(response.status).toBe(200);
      return response.json();
    })
    .then(rjson => {
      expect(rjson.result).toBeDefined();
    });
});


/*

before_script:
  - npm start &
  
*/