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
const {resolve} = require('path');
const env = require('dotenv').config({path: './.env'});


require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
const PORT = process.env.PORT || 8080;
// stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
apiVersion: '2020-08-27',
appInfo: { // For sample support and debugging, not required for production:
name: "stripe-samples/accept-a-payment/custom-payment-flow",
version: "0.0.2",
url: "https://github.com/stripe-samples"
}
});

app.use(express.static(process.env.STATIC_DIR));
app.use(
express.json({
// We need the raw body to verify webhook signatures.
// Let's compute it only when hitting the Stripe webhook endpoint.
verify: function (req, res, buf) {
if (req.originalUrl.startsWith('/webhook')) {
req.rawBody = buf.toString();
}
},
})
);
app.use(cors({
origin: '*'
}));

app.get('/', (req, res) => {
const path = resolve(process.env.STATIC_DIR + '/index.html');
res.sendFile(path);
});

app.get('/config', (req, res) => {
res.send({
publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
});
});

app.post('/create-payment-intent', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 1000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent1', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 4000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent2', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 9000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent3', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 16000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent4', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 25000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent5', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 36000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent6', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 49000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent7', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 72000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent8', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 81000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});

app.post('/create-payment-intent9', async (req, res) => {
const {paymentMethodType, currency,paymentMethodOptions} = req.body;

// Each payment method type has support for different currencies. In order to
// support many payment method types and several currencies, this server
// endpoint accepts both the payment method type and the currency as
// parameters.
//
// Some example payment method types include `card`, `ideal`, and `alipay`.
const params = {
payment_method_types: [paymentMethodType],
amount: 100000,
currency: currency,
}

// If this is for an ACSS payment, we add payment_method_options to create
// the Mandate.
if(paymentMethodType === 'acss_debit') {
params.payment_method_options = {
acss_debit: {
mandate_options: {
payment_schedule: 'sporadic',
transaction_type: 'personal',
},
},
}
} else if (paymentMethodType === 'konbini') {
/**
* Default value of the payment_method_options
*/
params.payment_method_options = {
konbini: {
product_description: 'Tシャツ',
expires_after_days: 3,
},
}
} else if (paymentMethodType === 'customer_balance') {
params.payment_method_data = {
type: 'customer_balance',
}
params.confirm = true
params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
}

/**
* If API given this data, we can overwride it
*/
if (paymentMethodOptions) {
params.payment_method_options = paymentMethodOptions
}

// Create a PaymentIntent with the amount, currency, and a payment method type.
//
// See the documentation [0] for the full list of supported parameters.
//
// [0] https://stripe.com/docs/api/payment_intents/create
try {
const paymentIntent = await stripe.paymentIntents.create(params);

// Send publishable key and PaymentIntent details to client
res.send({
clientSecret: paymentIntent.client_secret,
nextAction: paymentIntent.next_action,
});
} catch (e) {
return res.status(400).send({
error: {
message: e.message,
},
});
}
});
// Expose a endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the stripe developer dashboard
// https://dashboard.stripe.com/test/webhooks
app.post('/webhook', async (req, res) => {
let data, eventType;

// Check if webhook signing is configured.
if (process.env.STRIPE_WEBHOOK_SECRET) {
// Retrieve the event by verifying the signature using the raw body and secret.
let event;
let signature = req.headers['stripe-signature'];
try {
event = stripe.webhooks.constructEvent(
req.rawBody,
signature,
process.env.STRIPE_WEBHOOK_SECRET
);
} catch (err) {
console.log(`⚠️  Webhook signature verification failed.`);
return res.sendStatus(400);
}
data = event.data;
eventType = event.type;
} else {
// Webhook signing is recommended, but if the secret is not configured in `config.js`,
// we can retrieve the event data directly from the request body.
data = req.body.data;
eventType = req.body.type;
}

if (eventType === 'payment_intent.succeeded') {
// Funds have been captured
// Fulfill any orders, e-mail receipts, etc
// To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
console.log('💰 Payment captured!');
} else if (eventType === 'payment_intent.payment_failed') {
console.log('❌ Payment failed.');
}
res.sendStatus(200);
});

//end of stripe
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
