import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router()

// register a new user endpoint /auth/register
router.post('/register', (req, res) => {
    const { username, password } = req.body

    const hashedPassword = bcrypt.hashSync(password, 8)

    //save hashed password to db
    try {
        const insertUser = db.prepare(`INSERT INTO users (username, password)
        VALUES (?, ?)`)
        const result = insertUser.run(username, hashedPassword)

        const defaultTodo = "Hello :) Add your first todo!"
        const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`)
        insertTodo.run(result.lastInsertRowid, defaultTodo)

        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token })
    } catch (err)   {
        console.log(err.message)
        res.sendStatus(503)
    }

    res.sendStatus(201)
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    try {
        const getUser = db.prepare(`SELECT * FROM users WHERE username = ?`)
        const user = getUser.get(username)

        if (!user) {
            res.status(404).send({message: "User Not Found"})
            return
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password)

        if (!passwordIsValid) {return res.status(401).send({message: "Password is incorrect"})}
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({token})
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

export default router