const mongoose = require('mongoose')
const {Schema} = mongoose

const cabinSchema = new Schema({
    cabinName: {type: String, required: true},
    price:     {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    imageURL: {type: String, required: true},

})

const Cabin = mongoose.model('Cabin', cabinSchema)

module.exports = Cabin;