const { Device } = require('../models/device');

exports.upsert = async (req, res) => {
    try {
        const { hostname, ipAddress } = req.body.model;

        await Device.updateOne({ hostname }, {
            lastSeen: new Date(),
            ipAddress,
        },
        { upsert: true });

        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
}
