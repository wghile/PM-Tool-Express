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

    //Update
        router.put('/:id', async(req, res) => {
            try{
                const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body)
                res.json(updatedProperty)
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
                // res.json(newProperty)
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