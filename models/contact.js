const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    number: {type: String, required: true},
    occupation: {type: String, required: true},
    company: {type: String}
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact