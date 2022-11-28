import { SlowBuffer } from 'buffer'
import express from 'express'
import NodeRSA from 'node-rsa'
import Token from '../models/Token.js'
import Cards from '../models/Cards.js'
import { checkCreditCardNumber } from '../checkCRedNum.js'

//Setting up the token router
const tokenRouter = express.Router()

let key = new NodeRSA({b : 512})

const tokenGenerator = async (num)  => {
    const cardNum = Number(num)
    const x = Math.ceil(Math.random() * 10)
    const y = Math.ceil(Math.random() * 10)
    const token = (x*cardNum + y) 
    return token
}

// Routes
tokenRouter.get('/getPublicKey', (req, res) => {
    res.json(key.exportKey('public'))
})

// tokenRouter.get('/getPrivateKey' , (req, res) => {
//     res.json(key.exportKey('private'))
// })

tokenRouter.post('/trial', async (req,res) => {
    const {name , number , expiry, cvv} = req.body
    const encrypt = new NodeRSA(key.exportKey("public")).encrypt(JSON.stringify({name : name , number : number, expiry : expiry, cvv : cvv}), 'base64')
    console.log("encrypt : " , encrypt)
    res.end()
})

tokenRouter.post('/create' , async (req,res) => {
    const {name, number, expiry, cvv} = req.body 

    if(!checkCreditCardNumber(number)) return res.send("The credit card number is not valid")

    Cards.create({
        name : name , 
        number : number , 
        expiry : expiry , 
        cvv: cvv 
    }, (data, err) => {
        if(err) return res.status(400).send(err)
        res.end()
    })
    
})

tokenRouter.post('/data', async (req,res) => {
    const {cipher} = req.body
    const m = new NodeRSA(key.exportKey("private")).decrypt(cipher, 'utf8')
    const {name , number , expiry, cvv} = JSON.parse(m)
    const token = await tokenGenerator(number)
    
    Token.create({
        number : number , 
        token : String(token)  
    }, (err,data) => {
        if(err) {
            return res.status(400).send(err)
        }
        res.end()
    })
})

export default tokenRouter