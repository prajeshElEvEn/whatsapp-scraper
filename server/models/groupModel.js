const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupId: {
        type: String,
        unique: true
    },  // id._serialized
    groupName: {
        type: String,
    },  // name
    groupDescription: {
        type: String,
    },  // groupMetadata.desc
    groupParticipants: {
        type: Array,
    },  // groupMetadata.participants
}, {
    timestamps: true
})

module.exports = mongoose.model('Group', groupSchema);
