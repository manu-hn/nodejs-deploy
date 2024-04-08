const express = require('express');
const { createListings, deleteListing, fetchAllListings, getListingById, getListings, updateListings, getAll } = require('../controller/Sample.Controller');


const router = express.Router();

router.get('/get-all', getAll);

router.post('/create', createListings);
router.get('/get-listings/:id', getListings);
router.get('/get-listing/:id', getListingById);
router.delete('/delete/:id', deleteListing);
router.post('/update/:id', updateListings);
router.get('/fetch', fetchAllListings);

// router.get('/get',getFunction)

module.exports = router;

// import express from 'express';
// import { createListings, getListings, deleteListing, updateListings, getListingById, fetchAllListings} from '../controllers/Listings.controller.js';
// import { userAuthByToken } from '../utils/userAuth.js';


// const router = express.Router();

// export default router;