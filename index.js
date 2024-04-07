const express = require('express');
const dotenv = require('dotenv')
dotenv.config();

const app = express();

app.use(express.json());

app.use('/', (req, res, next)=>{
    res.status(200).json({error : false, message : 'OK Successful'})
})
app.use('*', (req, res, next)=>{
    res.status(404).json({error : true, message : 'Not FOund'})
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})