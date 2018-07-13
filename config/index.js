module.exports = {

    uri: "mongodb://localhost:27017/chat",
    opts: {
        auto_reconnect: true,
        poolSize: 40,
        useNewUrlParser: true
    },
    //main port
    const: port = 7777
};
