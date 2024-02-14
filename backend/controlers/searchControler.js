// const express = require('express');
// const asyncHandler = require("express-async-handler");

// const { performance } = require('perf_hooks');


// // Import your Pincode and Seller models
// const Pincode = require('../models/pincodeModel');
// const Seller = require('../models/sellerModel');

// // app.use(express.urlencoded({ extended: true }));

// // Route for searching sellers by pincode
// const searchpincode = asyncHandler(async(req, res)=>{
//   const{ pincodeToSearch }= req.body;
//   const pintosearch = Number(pincodeToSearch)
//   console.log(pintosearch)
//   console.log(typeof(pintosearch))
  

//   // Check if pincodeToSearch is not a number
//   if (isNaN(pintosearch)) {
//     return res.status(400).json({ error: 'Invalid pincode' });
//   }

//   try {
//     const startTime = performance.now(); // Record the start time
//     console.log("in thi try")
//     const pincodeEntry = await Pincode.findOne({ pincode: pintosearch });
//     console.log("pincodeentry"+pincodeEntry)

//     if (!pincodeEntry) {
//         return res.status(404).json({ message: `No sellers found for pincode ${pintosearch}` });
//       }
   

//     const sellerIds = pincodeEntry.sellerIds.map(seller => seller._id);
//     const sellers = await Seller.find({ _id: { $in: sellerIds } });

//     const endTime = performance.now(); // Record the end time
//     const elapsedTime = endTime - startTime; // Calculate elapsed time

//     console.log(`Time taken to fetch data: ${elapsedTime} milliseconds`);

//     res.status(200).json({ pincode: pincodeToSearch, sellers });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = searchpincode;









const express = require('express');
const asyncHandler = require("express-async-handler");

const { performance } = require('perf_hooks');


// Import your Pincode and Seller models
const Pincode = require('../models/pincodeModel');
const Seller = require('../models/sellerModel');

// app.use(express.urlencoded({ extended: true }));

// Route for searching sellers by pincode
const searchpincode = asyncHandler(async(req, res)=>{
  const{ pincodeToSearch }= req.query;
  const pintosearch = Number(pincodeToSearch)
  console.log(pintosearch)
  console.log(typeof(pintosearch))
  

  // Check if pincodeToSearch is not a number
  if (isNaN(pintosearch)) {
    return res.status(400).json({ error: 'Invalid pincode' });
  }


  try {
    const startTime = performance.now();
    console.log("in this try");
    const pincodeEntry = await Pincode.findOne({ pincode: pintosearch });
    console.log("pincodeentry" + pincodeEntry);

    if (!pincodeEntry) {
      return res.status(404).json({ message: `No sellers found for pincode ${pintosearch}` });
    }

    const sellerIds = pincodeEntry.sellerIds.map((seller) => seller._id);
    const sellers = await Seller.find({ _id: { $in: sellerIds } });

    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    console.log(`Time taken to fetch data: ${elapsedTime} milliseconds`);

    res.status(200).json({ pincode: pincodeToSearch, sellers });
  } catch (error) {
    console.error(error);
    throw new Error('database failed to connect');
  }
});

module.exports = searchpincode;