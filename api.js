const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8001
const url = 'http://localhost:8001'

const string_square = require('./string_square').string_square


app.get('/', (req, res) => res.send('Hello World!'))




app.get('/square', (req, res) => {
    var x = string_square(req.query.string);
    var risultato = {result: x};
    res.send(risultato);
})

//?string=my_string






var server = app.listen(PORT, () => console.log('Listening on port ' + PORT))


module.exports = app;
module.exports = server;