const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        unique: true,
        dropDups: true,
    },
    createdAt: {
        type: Date,
        index: true
    },
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = {
    Item,
}
