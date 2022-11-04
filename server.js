const session = require('express-session');
const {MongoClient} = require('mongodb');
var partials = require('express-partials');
const { NFTStorage, File, Blob } = require('nft.storage');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var http = require("http");
var path = require("path");
var fs = require("fs");
var formidable = require('formidable');
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true} ));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/data', express.static(__dirname + 'public/data'));
app.use('/assets', express.static(__dirname + 'public/assets'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/_next', express.static(__dirname + 'public/_next'));
app.use('/uploads', express.static(__dirname + 'public/uploads'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
const console = require('console');
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const expressLayouts = require('express-ejs-layouts');
const request = require('request');
const multer = require('multer');
app.use(express.static('public'))
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')
var corsOptions = {origin: "*"};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
const Role = db.role;

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
function initial() {
Role.estimatedDocumentCount((err, count) => {
if (!err && count === 0) {
new Role({
name: "user"
}).save(err => {
if (err) {
console.log("error", err);
}
console.log("added 'user' to roles collection");
});
new Role({
name: "moderator"
}).save(err => {
if (err) {
console.log("error", err);
}
console.log("added 'moderator' to roles collection");
});
new Role({
name: "admin"
}).save(err => {
if (err) {
console.log("error", err);
}
console.log("added 'admin' to roles collection");
});
}
});
}
