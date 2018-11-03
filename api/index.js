const express = require('express');
const app = express();
const port = 8888;

app.use(express.json());
app.use('/auth', require('./auth'));


app.listen(port);
console.log('Start. Port with : ' + port);
