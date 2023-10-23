const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    phoneNummer: {type: Number, required: true},
    adress: {type: String, required: true},
    streetAdress: {type: String, required: true} ,
    city: {type: String, required: true} ,
    state: {type: String, required: true} ,
})

const User = mongoose.model('User', userSchema)

module.exports = User;