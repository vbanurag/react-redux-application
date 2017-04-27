const Mongoose = require('mongoose');


const productSchema = new Mongoose.Schema({},{strict : false})

module.exports = Mongoose.model('Products', productSchema);