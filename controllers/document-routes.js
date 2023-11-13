//Controller --> holds all Routes with associated CRUD operation from Front End AJAX Request to do something with data from Model

const express = require('express')
const router = express.Router()
const Document = require('../models/documents')

//Routes: INDUCES
    //Index
        router.get('/', async(req, res) => {
            try{
                const documents = await Document.find()
                res.json(documents)
            }catch(error){
                console.error(error)
            }
        })

    //New

    //Delete
        // router.delete('/:id', async(req, res) => {
        //     try{
        //         await Property.findByIdAndDelete(req.params.id)
        //         return res.status(200).send({message: 'Property has been deleted'})
        //     }catch(error){
        //         console.error(error)
        //     }
        // })

    //Update
        // router.put('/:id', async(req, res) => {
        //     try{
        //         const updates = {
        //             address: req.body.address,
        //             city: req.body.city,
        //             zip: req.body.zip,
        //             country: req.body.country,
        //             name: req.body.name
        //         }
        //         const updatedProperty = await Property.findByIdAndUpdate(req.params.id, updates)
        //         // res.json(updatedProperty)
        //         return res.status(201).send(updatedProperty)
        //     }catch(error){
        //         console.log(error)
        //     }
        // })

    //Create
        // router.post('/', async(req, res) => {
        //     try{
        //         const newProperty = {
        //             address: req.body.address,
        //             city: req.body.city,
        //             zip: req.body.zip,
        //             country: req.body.country,
        //             name: req.body.name
        //         }
        //         const property = await Property.create(newProperty)
        //         // res.json(newProperty)
        //         return res.status(201).send(property)
        //     }catch(error){
        //         console.log(error)
        //     }
        // })

    //Edit
        // router.get('/:id', async(req, res) => {
        //     try{
        //         const property = await Property.findById(req.params.id)
        //         res.json(property)
        //     }catch(error){
        //         console.error(error)
        //     }
        // })

    //Show


module.exports = router