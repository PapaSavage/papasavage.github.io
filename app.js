const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendfile('public/index.html');
})

app.get('/artem', (req, res) => {
    res.sendfile('public/artem.html');
})
app.get('/pasha', (req, res) => {
    res.sendfile('public/pasha.html');
})
app.get('/pasha1', (req, res) => {
    res.sendfile('public/pasha1.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
