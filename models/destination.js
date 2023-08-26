const mongoose = require('mongoose')
const {Schema} = mongoose

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['BNA', 'CLT', 'ATL', 'DFW', 'IAD'],
        default: 'CLT',
        required: true
    },
    arrival: {
        type: String,
        default: function() {
            return new Date();
        }
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    gate: {
        type: String,
        default: function() {
            let sections = ['A', 'B', 'C', 'D'];
            let section = sections[Math.floor(Math.random() * 4)];
            return `${section}${Math.floor(Math.random() * 25) + 1}`;
        }
    }
}, {
    timestamps: true
})

module.exports = destinationSchema