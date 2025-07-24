const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
});

const CartSchema = new mongoose.Schema({
  user: { type: String, required: true }, // For demo, just a string. In real apps, use user ID.
  items: [CartItemSchema]
});

module.exports = mongoose.model('Cart', CartSchema); 