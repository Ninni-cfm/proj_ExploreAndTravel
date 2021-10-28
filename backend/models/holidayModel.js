const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    activity: {
        type: [String],
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    Description: {
        type: [String]
    }
}, { timestamps: true });

const HolidayModel = mongoose.model('userDB', holidaySchema);

module.exports = HolidayModel;
