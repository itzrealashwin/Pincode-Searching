const mongoose = require('mongoose');

const pincodeSchema = new mongoose.Schema({
  pincode: { type: Number, unique: true },
  sellerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seller' }]
});

const Pincode = mongoose.model('Pincode', pincodeSchema);

module.exports = Pincode;
