const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get cart for a user (for demo, user is sent as query param)
router.get('/', async (req, res) => {
  const user = req.query.user;
  if (!user) return res.status(400).json({ error: 'User required' });
  const cart = await Cart.findOne({ user }).populate('items.product');
  res.json(cart || { user, items: [] });
});

// Add item to cart
router.post('/add', async (req, res) => {
  const { user, productId, quantity } = req.body;
  if (!user || !productId) return res.status(400).json({ error: 'User and productId required' });
  let cart = await Cart.findOne({ user });
  if (!cart) cart = new Cart({ user, items: [] });
  const itemIndex = cart.items.findIndex(i => i.product.toString() === productId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity || 1;
  } else {
    cart.items.push({ product: productId, quantity: quantity || 1 });
  }
  await cart.save();
  res.json(cart);
});

// Remove item from cart
router.post('/remove', async (req, res) => {
  const { user, productId } = req.body;
  let cart = await Cart.findOne({ user });
  if (!cart) return res.status(404).json({ error: 'Cart not found' });
  cart.items = cart.items.filter(i => i.product.toString() !== productId);
  await cart.save();
  res.json(cart);
});

module.exports = router; 