const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const userSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    email: {type: String}

}, {
    versionKey: false,
    collection: "Users"
});

const Users = mongoose.model('UserModel', userSchema);
module.exports = Users;
