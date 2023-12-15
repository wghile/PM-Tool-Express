const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    number: {type: String, required: true},
})

const Contacts = mongoose.model('Contacts', contactsSchema)

module.exports = Contacts