const mongoose = require('mongoose');

const LogsSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
        trim: true
    },
    attention: {
        type: Boolean,
        default: false
    },
    tech: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Logs', LogsSchema);