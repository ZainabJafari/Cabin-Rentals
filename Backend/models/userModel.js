const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth')


exports.createNewUser = async (req, res) => {
    const {fullName, email, password, phoneNummer, streetAdress, city, state} = req.body;

    if(!fullName || !email || !password  || !phoneNummer || !streetAdress || !city || !state ){
        res.status(404).json({message: 'You need toenter all the fileds'})
        return
    }
    
    const salt = bcrypt.genSaltSync(10);

    bcrypt.hash(password, salt, (err, hash) => {
        if(err){
            return res.status(500).json({
                message: 'filed when encrpterin the password'
            })
        }
        User.create({fullName, email,  passwordHash: hash, phoneNummer, streetAdress, city, state })

        .then(user =>{
            res.status(201).json({
                token: auth.generateToken(user)
            })
        })
    })
}

exports.loginUser = (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({message: 'You need to enter both email and password'})
    }
    
    User.findOne({email})
    .then(data =>{
        if(!data){
            return res.status(401).json({message: 'incorrect credentials'})
        }

        bcrypt.compare(password, data.passwordHash, (err, result) => {
            if(err){
                return res.status(500).json({message: 'something went wrong when decrypting the psaaword'})
            }

            if(!result){
                return res.status(401).json({message: 'Incorrect credentials'})
            }

            res.status(200).json({token: auth.generateToken(data)})
        })


    })
}
