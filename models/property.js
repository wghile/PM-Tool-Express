const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    date: {type: String, required: true},
    status: {type: String, required: true},
    location: {type: String, required: true},
    source: {type: String, required: true},
    description: {type: String, required: true},
})

const docSchema = new mongoose.Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    updatedAt: {type: String}
})

const propertySchema = new mongoose.Schema({
    address: {type: String, required: true},
    city: {type: String, required: true},
    zip: {type: String, required: true},
    country: {type: String, required: true},
    name: {type: String},
    docs: [docSchema],
    services: [serviceSchema]
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property