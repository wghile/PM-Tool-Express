const mongoose = require('mongoose')

const docSchema = new mongoose.Schema({
    title: {type: String, required: true},
    url: {type: String, required: true}
})

const propertySchema = new mongoose.Schema({
    address: {type: String, required: true},
    city: {type: String, required: true},
    zip: {type: String, required: true},
    country: {type: String, required: true},
    name: {type: String},
    docs: [docSchema]
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property