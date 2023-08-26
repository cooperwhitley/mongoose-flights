const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const destinationSchema = require('./destination')

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'Delta', 'United']
    },
    airport: {
        type: String,
        enum: ['BNA', 'CLT', 'ATL', 'DFW', 'IAD'],
        default: 'BNA'
    },
    destinations: [destinationSchema],
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: String,
        default: function() {
            return new Date();
        }
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
});

const Flight = model('Flight', flightSchema)

module.exports = Flight;