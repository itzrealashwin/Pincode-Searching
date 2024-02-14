const express = require('express');
const router = express.Router();
const searchpincode = require('../controlers/searchControler');

// Route for searching sellers by pincode
router.get('/searchpincode', searchpincode);


module.exports = router;
