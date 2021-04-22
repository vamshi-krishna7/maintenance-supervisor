const mongoose = require('mongoose');

const TechsSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Techs', TechsSchema);