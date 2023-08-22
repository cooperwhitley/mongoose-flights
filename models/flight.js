const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'Delta', 'United']
    },
    airport: {
        type: String,
        enum: ['BNA', 'CLT', 'ATL', 'DFW', 'IAD'],
        default: 'BNA'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Number,
        default: function() {
            return new Date.getFullYear() + 1;
        }
    }
})