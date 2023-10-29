const router = require('express').Router()
const cabinModel = require('../models/cabinModel')


router.post('/add', cabinModel.createNewCabin)
router.get('/', cabinModel.getAllCabin)
router.get('/:id', cabinModel.getCabinById)

module.exports = router;