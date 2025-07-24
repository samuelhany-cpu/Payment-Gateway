const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { user, items, total, paymentIntentId } = req.body;
    const order = new Order({ user, items, total, paymentIntentId, paymentStatus: 'paid' });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all orders for a user
router.get('/', async (req, res) => {
  const user = req.query.user;
  if (!user) return res.status(400).json({ error: 'User required' });
  const orders = await Order.find({ user }).populate('items.product');
  res.json(orders);
});

module.exports = router; 