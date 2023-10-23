const express = require('express');
const { models } = require('mongoose');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/cabin', require('./controllers/cabinControl'))
app.use('/api/user', require('./controllers/userControl'))
app.use('/api/order', require('./controllers/orderControl'))


module.exports = app;