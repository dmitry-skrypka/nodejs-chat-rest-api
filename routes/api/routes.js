const user = require('./users');
const message = require('./messages');
const contacts = require('./contacts');

module.exports = function (app) {
    app.use('/api/users', user);
    app.use('/api/messages', message);
    app.use('/api/contacts', contacts);
};
