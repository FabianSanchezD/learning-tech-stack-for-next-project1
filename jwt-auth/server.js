import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());

const posts = [
    {
        username: "Fabian",
        title: "Post 1"
    },
    {
        username: "Sergio",
        title: "Post 2"
    }
]

app.get('/posts', (req, res) => {
    res.json(posts);
})

app.post('/login', (req, res) => {
    // auth user
    const username = req.body.username;
    
})

app.listen(3000, () => {
    console.log("Running on port 3000")
})