const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    // _id: {type: String},
    senderId: {type: Number},
    receiverId: {type: Number},
    messageBody: {type: String}

}, {
    versionKey: false,
    collection: "MessageCollection"
});

module.exports = mongoose.model('MessageModel', MessageSchema);
