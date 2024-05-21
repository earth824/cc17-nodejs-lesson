const express = require('express');

const authRouter = require('./routes/auth-route.js');
const billRouter = require('./routes/bill-route.js');

const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/bills', billRouter);

app.listen(8006, () => console.log('server running on port 8006'));
