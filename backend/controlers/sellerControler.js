const asyncHandler = require("express-async-handler");
const Seller = require("../models/sellerModel");
const generateToken = require('../config/generatetoken');

const registerseller = asyncHandler(async (req, res) => {
    const { companyName, email, password, pincodeIndices } = req.body;

    if (!companyName || !email || !password || !pincodeIndices) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    const sellerExists = await Seller.findOne({ email });
    if (sellerExists) {
        res.status(400);
        throw new Error("Seller already exists");
    }

    const seller = await Seller.create({
        companyName,
        email,
        password,
        pincodeIndices,
    });

    if (seller) {
        res.status(201).json({
            _id: seller._id,
            companyName: seller.companyName,
            email: seller.email,
            pincodeIndices: seller.pincodeIndices,
            token: generateToken(seller._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create the seller");
    }
});

const authseller = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const seller = await Seller.findOne({ email });

    if (seller && (await seller.matchPassword(password))) {
        res.json({
            _id: seller._id,
            companyName: seller.companyName,
            email: seller.email,
            pincodeIndices: seller.pincodeIndices,
            token: generateToken(seller._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

module.exports = { registerseller, authseller };
