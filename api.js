const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000
//const url = 'https://simulazione.herokuapp.com'
const url = 'http://localhost:8000'

const string_square = require('./string_square').string_square


app.get('/', (req, res) => res.send('Hello World!'))




app.get('/square', (req, res) => {
    var x = string_square(req.query.string);
})

//?string=my_string






app.listen(PORT, () => console.log('Listening on port ' + PORT))
