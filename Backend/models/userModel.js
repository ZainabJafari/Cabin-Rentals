const User = require('../schemas/userSchema')

exports.createNewUser = (req, res) => {
    const {fullName, email, phoneNummer, adress, streetAdress, city, state} = req.body;

    if(!fullName || !email || !phoneNummer || ! adress || !streetAdress || !city || !state ){
        res.status(404).json({message: 'You need toenter all the fileds'})
        return
    }

    User.create({fullName, email, phoneNummer, adress, streetAdress, city, state  })
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(500).json({
            message: 'something went wrong when creating',
            err: err.message
        })
        return
    })
}