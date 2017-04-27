const Mongoose = require('mongoose');

Mongoose.connect('mongodb://anuragsharma.com/mongoDemo');

(() => {
    Mongoose.connection.on('open', (err, data) => {
        console.log('successfully connected');
    });
    Mongoose.connection.on('error', (err, data) => {
        console.log('Error in connection ', err);
    })
})();