import express from 'express'
import Token from '../models/Token.js'

const merchantRouter = express.Router()


merchantRouter.get('/validation', (req,res) => {
    const {token} = req.body 
    Token.find({token : token}, (err,data) => {
        if(err) return res.status(400).send(err)
        res.end()
    })
})

export default merchantRouter