const asyncHandler = require("express-async-handler");
const Buyer = require("../models/buyerModel");
const { Error } = require("mongoose");
const generateToken = require('../config/generatetoken')

const registerbuyer = asyncHandler(async(req, res)=>{
    const {name , email, password, pincode} = req.body;

    if(!name || !email || !password ){
        res.status(400)
        throw new Error("Please Enter all the feilds")
    }

    const BuyerExits = await Buyer.findOne({ email })
    if(BuyerExits){
        res.status(400)
        throw new Error("buyer already exists")
    }
    const buyer = await Buyer.create({
        name,
        email,
        password,
        pincode,
    })
   
    if(buyer){
        res.status(201).json({
            _id : buyer._id,
            name : buyer.name,
            email : buyer.email,
            pincode : buyer.pincode,
            token : generateToken(buyer._id),
        })
    }
    else{
        res.status(400)
        throw new Error("Faild to Create the buyer")
    }
})

const authbuyer = asyncHandler(async(req, res)=>{
    const {email , password} = req.body
    const buyer = await Buyer.findOne({ email })

    if(buyer && (await buyer.matchPassword(password))){
        res.json({
            _id : buyer._id,
            name : buyer.name,
            email : buyer.email,
            pincode : buyer.pincode,
            token : generateToken(buyer._id),
        })
    }
    else{
        res.status(401)
        throw new Error("Invalid Email or Password")
    }
})

module.exports = { registerbuyer, authbuyer }