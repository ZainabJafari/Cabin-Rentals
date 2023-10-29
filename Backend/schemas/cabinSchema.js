const mongoose = require('mongoose')
const {Schema} = mongoose

const facilitySchema = new Schema({
    facility: {type: String, required: true},
    Included: {type: String, required: true},
})
const imagesSchema = new Schema({
    image: {type: String, required: true}
})

const cabinSchema = new Schema({
    cabinName: {type: String, required: true},
    price:     {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    imageURL: {type: String, required: true},
    property: [facilitySchema],
    images: [imagesSchema]
})

const Cabin = mongoose.model('Cabin', cabinSchema)

module.exports = Cabin;