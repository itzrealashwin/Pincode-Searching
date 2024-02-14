const express = require("express");
const router = express.Router();
const { registerbuyer, authbuyer } = require("../controlers/buyerControler");

router.route("/").post(registerbuyer);
router.route("/login").post(authbuyer); 

module.exports = router;