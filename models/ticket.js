const mongoose = require('mongoose')
const {Schema, model} = mongoose

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, {
    timestamps: true
})

const Ticket = model('Ticket', ticketSchema)

module.exports = Ticket