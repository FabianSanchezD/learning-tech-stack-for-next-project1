const express = require('express');
const app = express();

const PORT = 1212;

app.get('/', (req, res) => {
    // endpoint #1, /
    console.log("hit endpoint #1", req.method)
    res.sendStatus(200)
})

app.get('/dashboard', (req, res) => {
    console.log('hit endpoint #2', req.method)
    res.send('hello')
})

app.listen(PORT, () => console.log(`Server has started on ${PORT}`));   