const express = require('express');
const route = require('./server.route')
const PORT = 4000;
const app = express();

route.route(app);

app.listen(PORT, () => {
    console.log('Server is Started')
})