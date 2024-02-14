const express = require("express");
const router = express.Router();
const { registerseller, authseller } = require("../controlers/sellerControler");

router.route("/register").post(registerseller);
router.route("/").post(authseller); 

module.exports = router;