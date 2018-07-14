const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
    findAll: callback => {
        MessageRepository.getAll((err, data) => {
            callback(null, data);
        });
    },
    findOne: (id, callback) => {
        MessageRepository.getById(id, (err, data) => {
            callback(err, data);
        });
    },

    removeOne: (id, callback) => {
        MessageRepository.removeById(id, (err, data) => {
            callback(err, data);
        });
    },

    save: (obj, callback) => {
        MessageRepository.saveOne(obj, (err, data) => {
            callback(err, data);
        });
    },

    updateOne: (obj, _id, callback) => {
        MessageRepository.updateOne(obj, _id, (err, data) => {
            callback(err, data);
        });
    },

    // getContacts: (id, callback) => {
    //     MessageRepository.getContacts(id, (err, data) => {
    //         callback(err, data);
    //     });
    // },
    getReceiverId: (id, callback) => {
        MessageRepository.getReceiverId(id, (err, data) => {
            callback(err, data);
        });
    }

};
