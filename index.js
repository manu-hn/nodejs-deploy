const express = require('express');
const dotenv = require('dotenv');
require('./connection/Sample.connection.js');
const SampleRoutes = require('./routes/Sample.routes.js');
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/sample', SampleRoutes);
app.use('*', (req, res, next) => {
    res.status(404).json({ error: true, message: 'Not FOund' })
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})