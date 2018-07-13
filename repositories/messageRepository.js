const Repository = require("./generalRepository");
const Message = require("../models/message.model");

function MessageRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Message;
    this.getById = getById;
    this.removeById = removeById;
    this.updateOne = updateOne;
    this.getContacts = getContacts;
}

MessageRepository.prototype = new Repository();

function getById(id, callback) {
    let model = this.model;
    let query = model.find({
        "_id": id
    });
    query.exec(callback);
}

function removeById(id, callback) {
    let model = this.model;
    let query = model.deleteOne({
        "_id": id
    });
    query.exec(callback);
}

function updateOne(obj, _id, callback) {
    let model = this.model;
    let query = model.updateOne({_id: _id}, {
        senderId: obj.senderId,
        receiverId: obj.receiverId,
        'messageBody': obj.messageBody
    });
    query.exec(callback);
}

function getContacts(id, callback) {
    let model = this.model;
    let query = model.find({senderId: id});
    // console.log(query);
    query.exec(callback);
}


module.exports = new MessageRepository();