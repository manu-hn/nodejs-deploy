const express = require('express');
const { getFunction } = require('../controller/Sample.Controller');


const router = express.Router();


router.get('/get',getFunction)

module.exports = router;