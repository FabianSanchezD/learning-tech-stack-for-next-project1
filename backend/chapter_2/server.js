const express = require('express');
const app = express();

const PORT = 1212;

app.get('/', (req, res) => {
    // endpoint #1, /
    console.log("hit endpoint #1", req.method)
    res.send(`<body>
                <h1>DATA</h1>
                <p>${JSON.stringify(data)}</p>
            </body>`)
})

app.get('/dashboard', (req, res) => {
    console.log('hit endpoint #2', req.method)
    res.send('hello')
})

let data = ['fabian']

//Middleware

app.use(express.json())

// api endpoints

app.get('/api/data', (req, res) => {
    console.log('this is for data')
    res.status(100).send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('eliminated')
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Server has started on ${PORT}`));   