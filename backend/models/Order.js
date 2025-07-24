const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
});

const OrderSchema = new mongoose.Schema({
  user: { type: String, required: true },
  items: [OrderItemSchema],
  total: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  paymentIntentId: { type: String }
});

module.exports = mongoose.model('Order', OrderSchema); 