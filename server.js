const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongooseConnection = require("./db/dbconnect").connection;


const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(
    session({
        secret: "sessionsecretsessionsecret",
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({
            mongooseConnection: mongooseConnection
        })
    })
);

const staticPath = path.normalize(__dirname + "/public");
app.use(express.static(staticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require("./routes/api/routes")(app);

const server = app.listen(port, () => console.log('Server started on ' + port));
