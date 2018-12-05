var https = require('http');
const fetch = require("node-fetch");

const url = 'http://localhost:8000'

async function get(url) {
	console.log('\n\ngetting ' + url + '\n')
    try {
	const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
};

var my_string = 'prova';

get(url+'/square?string='+my_string);
