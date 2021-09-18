const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    hostname: {
        type: String,
        index: true,
        unique: true,
        dropDups: true,
    },
    ipAddress: {
        type: String,
        index: true,
    },
    lastSeen: {
        type: Date,
        index: true
    },
});

const Device = mongoose.model('Device', DeviceSchema);

module.exports = {
    Device,
}
