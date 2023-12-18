//Controller --> holds all Routes with associated CRUD operation from Front End AJAX Request to do something with data from Model

const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

//Routes: INDUCES
    // Index
        router.get('/', async(req, res) => {
            try{
                const contacts = await Contact.find()
                res.json(contacts)
            }catch(error){
                console.error(error)
            }
        })

    //New

    //Delete
        router.delete('/:id', async(req, res) => {
            try{
                await Contact.findByIdAndDelete(req.params.id)
                return res.status(200).send({message: 'Contact has been deleted'})
            }catch(error){
                console.error(error)
            }
        })

    // Update
    
    //Create
        router.post('/', async(req, res) => {
            try{
                const newContact = {
                    name: req.body.name,
                    number: req.body.number,
                    occupation: req.body.occupation,
                    company: req.body.company
                }
                const contact = await Contact.create(newContact)
                return res.status(201).send(contact)
            }catch(error){
                console.log(error)
            }
            console.log(req)
        })

    //Edit

    //Show


module.exports = router