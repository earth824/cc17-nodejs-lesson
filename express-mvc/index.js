const express = require('express');

const customerRouter = require('./routes/customer-route');

const app = express();

app.use('/customers', customerRouter);

// app.get('/hotels', (req, res, next) => {});

app.listen(8005, () => console.log('server 8005'));
