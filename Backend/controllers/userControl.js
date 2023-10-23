const router = require('express').Router()
const userModel = require('../models/userModel')

router.post('/register', userModel.createNewUser)


module.exports = router;