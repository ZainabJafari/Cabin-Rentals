const mongoose = require('mongoose')
const {Schema} = mongoose;

const orderRaderSchema = new Schema({
    cabin: {type: Schema.Types.ObjectId, ref: 'Cabin' , required: true },
    checkInDate: {type: Number},
    checkOutDate: {type: Number}
})

const orderShema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    orderRader: {type: [orderRaderSchema], required: true}
})

module.exports = mongoose.model('Order', orderShema)