//app.js
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(shopRouters);

app.listen(8080, () => {
    console.log('Listening on port 8080');
});