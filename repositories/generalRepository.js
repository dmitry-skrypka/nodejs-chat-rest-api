function Repository() {
}


Repository.prototype.getAll = getAll;
Repository.prototype.saveOne = saveOne;

function getAll(callback) {
    let model = this.model;
    let query = model.find();
    query.exec(callback);
}

function saveOne(obj, callback) {
    let model = this.model;
    model.create(obj);
    callback();
}

module.exports = Repository;
