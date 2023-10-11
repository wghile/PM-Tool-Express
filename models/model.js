const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    street: {type: 'String', required: true},
    city: {type: 'String', required: true},
    zipCode: {type: 'String', required: true},
    state: {type: 'String', required: true},
    country: {type: 'String', required: true},
    name: {type: 'String', required: true}
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property