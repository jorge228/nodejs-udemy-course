const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });


// middleware - static content
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Jorge',
        age: 34
    })
})

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// })
app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Jorge',
        age: 34
    })
})

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })
app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Jorge',
        age: 34
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})