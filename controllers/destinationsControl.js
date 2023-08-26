const express = require('express')
require('dotenv').config()

const Flight = require('../models/flight')
const router = express.Router()

// create
router.post('/:flightId', (req, res) => {
    Flight.findById(req.params.flightId)
    .then(flight => {
        flight.destinations.push(req.body)
        return flight.save()
    })
    .then(flight => {
        res.redirect(`/flights/${flight._id}`)
    })
    .catch(error => console.error)
})

module.exports = router