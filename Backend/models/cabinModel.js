const Cabin = require('../schemas/cabinSchema')

exports.createNewCabin = (req, res) => {
    const {cabinName, price, description, category, imageURL } = req.body;

    if(!cabinName || !price || !description || !category || !imageURL){
        res.status(400).json({
            message: 'You need to enter all the fields'
        })
        return
    }

    Cabin.create({cabinName, price, description, category, imageURL})
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

exports.getAllCabin = async (req, res) => {
    try {
        const cabins = await Cabin.find()
        res.status(200).json(cabins)
    } catch (error) {
        res.status(500).json({message: 'something went wrong when getting the cabins'})
    }
}
