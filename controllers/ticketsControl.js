const express = require('express')
require('dotenv').config()

const Flight = require('../models/flight')
const Ticket = require('../models/ticket')
const router = express.Router()

// new
router.get('/new/:flightId', (req, res) =>{
    Flight.findById(req.params.flightId)
        .then(flight => {
            res.render('tickets/new', {title: 'Add a Ticket', flight: flight})
        })
})

// create
router.post('/:flightId', (req, res) => {
    Flight.findById(req.params.flightId)
        .then(flight => {
            req.body.flight = flight._id
            Ticket.create(req.body)
                .then(ticket => {
                    res.redirect(`/flights/${ticket.flight}`)
                })
        })
        .catch(error => console.error)
})

module.exports = router