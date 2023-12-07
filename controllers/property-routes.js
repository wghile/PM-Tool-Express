//Controller --> holds all Routes with associated CRUD operation from Front End AJAX Request to do something with data from Model

const express = require('express')
const router = express.Router()
const Property = require('../models/property')

//Routes: INDUCES
    //Index
        router.get('/', async(req, res) => {
            try{
                const properties = await Property.find()
                res.json(properties)
            }catch(error){
                console.error(error)
            }
        })

    //New

    //Delete
        router.delete('/:id', async(req, res) => {
            try{
                await Property.findByIdAndDelete(req.params.id)
                return res.status(200).send({message: 'Property has been deleted'})
            }catch(error){
                console.error(error)
            }
        })

    //Update
        router.put('/:id', async(req, res) => {
            try{
                const updates = {
                    address: req.body.address,
                    city: req.body.city,
                    zip: req.body.zip,
                    country: req.body.country,
                    name: req.body.name,
                    docs: req.body.docs,
                    services: req.body.services
                }
                const updatedProperty = await Property.findByIdAndUpdate(req.params.id, updates)
                return res.status(201).send(updatedProperty)
            }catch(error){
                console.log(error)
            }
        })

    //Create
        router.post('/', async(req, res) => {
            try{
                const newProperty = {
                    address: req.body.address,
                    city: req.body.city,
                    zip: req.body.zip,
                    country: req.body.country,
                    name: req.body.name
                }
                const property = await Property.create(newProperty)
                return res.status(201).send(property)
            }catch(error){
                console.log(error)
            }
        })

    //Edit
        router.get('/:id', async(req, res) => {
            try{
                const property = await Property.findById(req.params.id)
                res.json(property)
            }catch(error){
                console.error(error)
            }
        })

    //Show


module.exports = router