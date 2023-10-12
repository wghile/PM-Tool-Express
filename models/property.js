const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    address: {type: String, required: true},
    city: {type: String, required: true},
    zip: {type: String, required: true},
    country: {type: String, required: true},
    name: {type: String},
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property