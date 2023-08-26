const Flight = require('../models/flight');
const Ticket = require('../models/ticket')


// index
function index(req, res) {
    Flight.find({})
    .then(flightDocs => {
        console.log('all flights found\n', flightDocs);
        res.render('flights/index', { flights: flightDocs, title: 'All Flights'})
    })
    .catch(err => {
        console.log('===err===')
        console.log(err)
        console.log('===err===')
            return res.send('err creating - check terminal')
        })
}
    // new
function newFlight(req, res) {
    console.log('new route')
    res.render('flights/new', {errorMsg: '', title: 'Track a New Flight'})
}
    // delete
    // update
    // create
function create(req, res) {
    console.log('this is the req.body', req.body);
    Flight.create(req.body)
        .then(flightDoc => {
            console.log('this is the flight returned from the db', flightDoc)
            res.redirect('/flights')
        })
        .catch(err => {
            console.log('===err===')
            console.log(err)
            console.log('===err===')
            return res.send('err creating - check term')
        })
}
    // edit
    // show
function show(req, res) {
    Flight.findById(req.params.id)
        .then(flightDoc => {
            Ticket.find({})
                .then(ticketDocs => {
                    console.log('this is the flight to show', flightDoc)
                    res.render('flights/show', {flight: flightDoc, tickets: ticketDocs, title: 'Flight Details'})
                })
        })
        .catch(err => {
            console.log('===err===')
            console.log(err)
            console.log('===err===')
            return res.send('err finding - check terminal')
        })
}
module.exports = {
    index,
    new: newFlight,
    create,
    show
}