import NodeRSA from 'node-rsa'
import tokenServer from './tokenServer.js'
import mongoose from 'mongoose'
import merchantServer from './merchantServer.js'

const tokenPort = process.env.PORT || 5000 
const merchantPort = process.env.PORT || 8000 

// Configuration of database 
mongoose.connect(process.env.DB_CONNECT , {
    useNewUrlParser : true , 
    useUnifiedTopology : true
}).then(() => {
    tokenServer.listen(tokenPort , () => console.log(`Listening on port ${tokenPort}`))
    merchantServer.listen(merchantPort, () => console.log("Listening at PORT ", merchantPort))
})

//Running the servers 



// import NodeRSA from 'node-rsa'

// const key = new NodeRSA({b : 512})
// console.log(key.exportKey("private"))
// console.log(key.exportKey("public"))
// // const tokenKey = new NodeRSA({b : 512})

// // const text = "6011587609490172" 
// // const encrypted = tokenKey.encrypt(text, 'base64')
// // console.log("The encrypted data is" , encrypted)
// // const decrypted = tokenKey.decrypt(encrypted, 'utf8')
// // console.log("The decrypted data is : ", decrypted)

// // console.log ("The public key is : " , key.exportKey('public'))
// // console.log ("The private key is : " , key.exportKey('private'))


// // -----BEGIN PUBLIC KEY-----
// // MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKKah99SIW5/YwOvtWcGel5+q6mB9Fjo
// // s4wPRX5GR6ThIQ8C/aKZ20j5t/d7Die1tyMnxLLu97tn2TSjElFwez8CAwEAAQ==
// // -----END PUBLIC KEY-----

// const publicKey = '-----BEGIN PUBLIC KEY-----\n' + 
// 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKKah99SIW5/YwOvtWcGel5+q6mB9Fjo\n' + 
// 's4wPRX5GR6ThIQ8C/aKZ20j5t/d7Die1tyMnxLLu97tn2TSjElFwez8CAwEAAQ==\n' + 
// '-----END PUBLIC KEY-----'

// const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n' + 
// 'MIIBOgIBAAJBANmvXMSU/mnbm3ksB/Pr/llMo0JncQtnZEBGTCLjizDVlhgen8XH\n' + 
// 'WAXe5M0xL5v3znfFma9YYdFG+mrs8pO0zsMCAwEAAQJAOMg0c5bF0kkVggMJRAgv\n' + 
// '/Y0vHNgstaPPk7CClaszGJZy6qeg0qmiwjQiusBb+ocRdtQ5HQPi+o73Ju6tY1Qc\n'+
// '4QIhAPPzDj+1CorzPGHrwycaFj6Yt1Gb33wnl2TWib+4K3kTAiEA5HArzXRUjYVN\n' + 
// 'EGmNcK0Va8hjWy5HGtkNlmt2htpgOZECIQCGQaoB3b0jo6IDsiEBEBZV9O5O954T\n' + 
// 'Uia71GaTIOSsCQIgT5EOgLpzNPPoOr45KLTw0CD1Em5VD/HoPKtjlmb7uzECIHPm\n' +
// 'KZ3yXlHnr2BJw33z4VZeIwIIquy0zXKDr37aB2Cs\n' + 
// '-----END RSA PRIVATE KEY-----'

// const privKey = new NodeRSA(key.exportKey("private"))
// const pubKey = new NodeRSA(key.exportKey("public"))

// const secret = "4556657173598308"

// const encrypt = pubKey.encrypt(secret, 'base64')
// console.log("The encrypted data is : " , encrypt)

// console.log('The decrypted data is : ' , privKey.decrypt(encrypt, 'utf8'))

