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

    //Create

    //Edit

    //Show

    
module.exports = router