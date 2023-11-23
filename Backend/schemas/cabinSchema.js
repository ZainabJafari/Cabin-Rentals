const mongoose = require('mongoose')
const { Schema } = mongoose

const facilitySchema = new Schema({
   Washingmachine: {type: String},
   Privateparking: {type: String},
   Privatedeck: {type: String},
   Kingsizebed: {type: String},
   Towels: {type: String},
   Lounge: {type: String},
})

const includedSchema = new Schema({
    Included: { type: String },
})



const imagesSchema = new Schema({
    image: { type: String, required: true }
})

const cabinSchema = new Schema({
    cabinName: { type: String, required: true, default: 'All' },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageURL: { type: String, required: true },
    property: [facilitySchema],
    included: [includedSchema],
    images: [imagesSchema]
})

const Cabin = mongoose.model('Cabin', cabinSchema)

module.exports = Cabin;