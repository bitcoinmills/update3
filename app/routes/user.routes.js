const { authJwt } = require("../middlewares");
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var http = require("http");
var path = require("path");
var fs = require("fs");
const request = require('request');
const multer = require('multer');
var storage = multer.diskStorage({
filename: function (req, file, cb) {
cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
}
});
var upload = multer({ storage: storage });
var upload1 = multer({dest:'public/images/uploads'});
const controller = require("../controllers/user.controller");
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://westham321:westham321@cluster0.x5l6q.mongodb.net/pixillion?retryWrites=true&w=majority";


module.exports = function(app) {
app.use(function(req, res, next) {
res.header(
"Access-Control-Allow-Headers",
"x-access-token, Origin, Content-Type, Accept"
);
next();
});

app.get("/api/test/all", controller.allAccess);

app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

app.get(
"/api/test/mod",
[authJwt.verifyToken, authJwt.isModerator],
controller.moderatorBoard
);

app.get(
"/api/test/admin",
[authJwt.verifyToken, authJwt.isAdmin],
controller.adminBoard
);

app.get("/", (req, res) => {
MongoClient.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
if (err) throw err;
var dbo = db.db("pixillion");
//Sort the result by name:
var sort = { name: 1 };
dbo.collection("YourCollection").find({paid: true}).sort(sort).toArray(function(err, result) {
if (err) throw err;
res.render('index3', {layout: './layouts/index7',  title: 'PiXillion', 'results':result});
console.log(result);
db.close();
});
});
});

app.post('/uploadfilec', upload.single('logo'), async(req, res, next) => {
//console.log(req.body.file);

// console.log(JSON.stringify(req.body));
const file = req.file
if (!file) {
const error = new Error('Please upload a file')
error.httpStatusCode = 400
return next(error)
}

const dude5 = file.filename;
// console.log(req.protocol+'://'+req.get('host')+'/uploads/'+dude5);
const dude6 = req.protocol+'://'+req.get('host')+'/uploads/'+dude5;
//res.send(file);
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
const directory = '';
data.append('file', fs.createReadStream(file.path));
var config = {
method: 'post',
url: 'https://api.nft.storage/upload',
headers: { 
'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBhMTI2NTUyYUQyNTAwZWQxNzYzNWRFNTZiOUY0QkQ2QzE2MzY3ZjkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MjExNjc3NTE5NywibmFtZSI6ImR1ZGUifQ.KrSkV0hh8XPJ1tRYMMg9Xdx1SFAc1XoteDow_qxllSs', 
'Content-Disposition': 'name="fieldName"; filename="filename.jpg"', 
...data.getHeaders()
},
data : data
};
axios(config)
.then(function (response) {
var response1 = (JSON.stringify(response.data));
const before_ = response1.split('","created"')[0];
const after_ = before_.substring(before_.indexOf('":"') + 1);
const after1_ = after_.split('"')[1];    
res.json({message: "Successfully Uploaded", cid: after1_,filename: dude5, status: 200});

})
.catch(function (error) {
console.log(error);
});
});

app.post('/uploadfileb', upload.single('logo'), async(req, res, next) => {
//console.log(req.body.file);

// console.log(JSON.stringify(req.body));
const file = req.file
if (!file) {
const error = new Error('Please upload a file')
error.httpStatusCode = 400
return next(error)
}

const dude5 = file.filename;
// console.log(req.protocol+'://'+req.get('host')+'/uploads/'+dude5);
const dude6 = req.protocol+'://'+req.get('host')+'/uploads/'+dude5;
//res.send(file);
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
const directory = '';

data.append('file', fs.createReadStream(file.path));
var config = {
method: 'post',
url: 'https://api.nft.storage/upload',
headers: { 
'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBhMTI2NTUyYUQyNTAwZWQxNzYzNWRFNTZiOUY0QkQ2QzE2MzY3ZjkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MjExNjc3NTE5NywibmFtZSI6ImR1ZGUifQ.KrSkV0hh8XPJ1tRYMMg9Xdx1SFAc1XoteDow_qxllSs', 
'Content-Disposition': 'name="fieldName"; filename="filename.jpg"', 
...data.getHeaders()
},
data : data
};


axios(config)
.then(function (response) {
var response1 = (JSON.stringify(response.data));

const before_ = response1.split('","created"')[0];
const after_ = before_.substring(before_.indexOf('":"') + 1);
const after1_ = after_.split('"')[1];

let MongoClient = require('mongodb').MongoClient;
let connectionUrl = "mongodb+srv://westham321:westham321@cluster0.x5l6q.mongodb.net/pixillion?retryWrites=true&w=majority";
var isodate = new Date().toISOString();
let obj = {"image" : dude5,"companyname": req.body.companyname ,
"description": req.body.description, "contact": req.body.contact ,
"email": req.body.email, "lastname": req.body.lastname, "firstname" : req.body.firstname,
"wallet": req.body.wallet, "other": req.body.other, "sector": req.body.sector,
"Coordinatesx" : req.body.result123, "Coordinatesy" : req.body.result123a, "cid": after1_, "approved": false,
"published": false, "paid": false, "createdAt": new Date(isodate),
"updatedAt": new Date(isodate),"width" : req.body.result123b, "height" : req.body.result123c, "url" : req.body.url};



MongoClient.connect(connectionUrl, function(err, client) {
if (err) throw err;
var db = client.db('pixillion')
db.collection("YourCollection").insertOne(obj, function(err, res) {
if (err) throw err;
client.close();
});
});
res.json({message: "Successfully Registered", cid: after1_, status: 200});

})
.catch(function (error) {
console.log(error);
});
});

app.get("/test", (req, res) => {
res.json({ message: "Welcome to bezkoder application." });
});

app.post('/single5', upload1.single('profile'), (req, res) => {
try {
res.send(req.file);
}catch(err) {
res.send(400);
}
});

app.get('/test2', async (req, res) => {
var header = [
{files: "../partials/metaheader.ejs"},{files: "../partials/style1.ejs"},
];
var bottomscript = [
{files: "../partials/script2a.ejs"},
{files: "../partials/script3a.ejs"},
];
res.render('index2', {layout: './layouts/index1d',  title: 'tstwe', headers: header, bottomscripts: bottomscript});
});

app.get('/test3', async (req, res) => {
var header = [
{files: "../partials/metaheader.ejs"},{files: "../partials/style1.ejs"},
];
var bottomscript = [
{files: "../partials/script2a1.ejs"},
{files: "../partials/script3a1.ejs"},
];
res.render('index2a', {layout: './layouts/index1da',  title: 'tstwe', headers: header, bottomscripts: bottomscript});
});

app.get('/form20', async (req, res) => {
var header = [
{files: "../partials/metaheader.ejs"},{files: "../partials/style1.ejs"},
];
var bottomscript = [
{files: "../partials/script2.ejs"},
{files: "../partials/script3.ejs"},
];
res.render('index1a', {layout: './layouts/index1a',  title: 'tstwe', headers: header, bottomscripts: bottomscript});
});

app.get('/test2', async (req, res) => {
var header = [
{files: "../partials/metaheader.ejs"},{files: "../partials/style2.ejs"},
];
var bottomscript = [
{files: "../partials/script4.ejs"},
];
MongoClient.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
if (err) throw err;
var dbo = db.db("pixillion");
var sort = { name: 1 };
dbo.collection("YourCollection").find({paid: true}).sort(sort).toArray(function(err, result) {
if (err) throw err;
res.render('index1', {layout: './layouts/index1', title: 'PiXillion', 'results':result,
headers: header, bottomscripts: bottomscript});
console.log(result);
db.close();
});
});
});

app.get("/1d", (req, res) => {
MongoClient.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
if (err) throw err;
var dbo = db.db("pixillion");
var sort = { name: 1 };
dbo.collection("YourCollection").find({paid: true}).sort(sort).toArray(function(err, result) {
if (err) throw err;
res.render('index', {layout: './layouts/index6',  title: 'tst', 'results':result});
console.log(result);
db.close();
});
});
});

app.get("/payment", (req, res) => {
MongoClient.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
if (err) throw err;
var dbo = db.db("pixillion");
var sort = { name: 1 };
dbo.collection("YourCollection").find({paid: true}).sort(sort).toArray(function(err, result) {
if (err) throw err;
res.render('payment', {layout: './layouts/index9',  title: 'tst', 'results':result});
console.log(result);
db.close();
});
});
});

app.post('/single', upload.single('profile'), (req, res) => {
try {
res.send(req.file);
}catch(err) {
res.send(400);
}
});

app.get("/index4", (req, res) => {
res.render('index', {layout: './layouts/index4',  title: 'tst'});
});

app.get("/index4a", (req, res) => {
res.render('index', {layout: './layouts/index4a',  title: 'tst'});
});

app.get("/login", (req, res) => {
res.render('index', {layout: './layouts/login',  title: 'tst'});
});

app.get("/index5", (req, res) => {
res.render('index', {layout: './layouts/index5',  title: 'tst'});
});

app.get("/tester1", (req, res) => {
res.render('index', {layout: './layouts/tester1',  title: 'tst'});
});

app.get("/admin", (req, res) => {
res.render('index', {layout: './layouts/index',  title: 'tst'});
});

app.get("/charts", (req, res) => {
res.render('index', {layout: './layouts/charts',  title: 'tst'});
});

app.get("/forgot", (req, res) => {
res.render('index', {layout: './layouts/forgot',  title: 'tst'});
});

app.get("/cards", (req, res) => {
res.render('index', {layout: './layouts/cards',  title: 'tst'});
});

app.get("/blank", (req, res) => {
res.render('index', {layout: './layouts/blank',  title: 'tst'});
});

app.get("/client", (req, res) => {
res.render('index', {layout: './layouts/client',  title: 'tst'});
});

app.get("/client1", (req, res) => {
res.render('index', {layout: './layouts/client1',  title: 'tst'});
});

app.get("/client2", (req, res) => {
res.render('index', {layout: './layouts/client2',  title: 'tst'});
});
app.get("/buttons", (req, res) => {
res.render('index', {layout: './layouts/buttons',  title: 'tst'});
});

app.get("/404", (req, res) => {
res.render('index', {layout: './layouts/404',  title: 'tst'});
});

app.get("/register", (req, res) => {
res.render('index', {layout: './layouts/register',  title: 'tst'});
});

app.get("/testcard", (req, res) => {
    res.render('index', {layout: './layouts/testcard',  title: 'tst'});
    });

    app.get("/testcard1", (req, res) => {
        res.render('index', {layout: './layouts/testcard1',  title: 'tst'});
        });

app.get("/tables", (req, res) => {
res.render('index', {layout: './layouts/tables',  title: 'tst'});
});

app.get("/utilities-other", (req, res) => {
res.render('index', {layout: './layouts/utilities-other',  title: 'tst'});
});

app.get("/utilities-color", (req, res) => {
res.render('index', {layout: './layouts/utilities-color',  title: 'tst'});
});

app.get("/utilities-animation", (req, res) => {
res.render('index', {layout: './layouts/utilities-animation',  title: 'tst'});
});

app.get("/utilities-border", (req, res) => {
res.render('index', {layout: './layouts/utilities-border',  title: 'tst'});
});

app.post('/uploadfilef1', async(request, res) => {
   // console.log(request.data);
   // console.log(JSON.stringify(request.data));
   // console.log(JSON.stringify(request.body));
   // console.log(request.body);
  //  console.log(request.cid);
  
    
 

  

    let MongoClient = require('mongodb').MongoClient;
    let connectionUrl = "mongodb+srv://westham321:westham321@cluster0.x5l6q.mongodb.net/pixillion?retryWrites=true&w=majority";
    var isodate = new Date().toISOString();
    let obj = {"image" : request.body.logo,"companyname": request.body.companyname ,
    "description": request.body.description, "contact": request.body.contact ,
    "email": request.body.email, "lastname": request.body.lastname, "firstname" : request.body.firstname,
    "wallet": request.body.wallet, "other": request.body.other, "sector": request.body.sector,
    "Coordinatesx" : request.body.result123, "Coordinatesy" : request.body.result123a, "cid": request.body.cid, "approved": false,
    "published": false, "paid": false, "createdAt": new Date(isodate),
    "updatedAt": new Date(isodate),"width" : request.body.result123b, "height" : request.body.result123c, "url" : request.body.url};
    
    
    
    MongoClient.connect(connectionUrl, function(err, client) {
    if (err) throw err;
    var db = client.db('pixillion')
    db.collection("YourCollection")
    .insertOne(obj)
    .then(result => {
      console.log(result.insertedId);
      res.json({message: "Successfully Registered", clientid: result.insertedId, status: 200});
    })
    .catch(err => {
      // handle error
    });

    });
    
    });
    
 
    

};
    