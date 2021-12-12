const express = require('express');
const mongoose = require('mongoose');
var cors = require ('cors')
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

app.use(cors());

let dev_db_url = 'mongodb+srv://Zeldariam:BAKACHIWAWA100@cluster0.czpwf.mongodb.net/DDB?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

let port = 1111;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
