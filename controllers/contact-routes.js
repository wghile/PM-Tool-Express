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

    //Update
        // router.put('/:id', async(req, res) => {
        //     try{
        //         const updates = {
        //             address: req.body.address,
        //             city: req.body.city,
        //             zip: req.body.zip,
        //             country: req.body.country,
        //             name: req.body.name,
        //             docs: req.body.docs,
        //             requests: req.body.requests
        //         }
        //         const updatedContact = await Contact.findByIdAndUpdate(req.params.id, updates)
        //         return res.status(201).send(updatedContact)
        //     }catch(error){
        //         console.log(error)
        //     }
        // })

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
        // router.get('/:id', async(req, res) => {
        //     try{
        //         const contact = await Contact.findById(req.params.id)
        //         res.json(contact)
        //     }catch(error){
        //         console.error(error)
        //     }
        // })

    //Show


module.exports = router