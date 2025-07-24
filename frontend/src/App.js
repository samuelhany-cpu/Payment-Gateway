import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation';
import './styles.css';

const stripePromise = loadStripe('pk_test_51RoC1QE1AbMtb0HSAdfcpYJGG3DzSMhQiCdBCvJmyJ7A8HhWisD464bBD2jK4Sdf19ueR6LYDCIV9dPdh8y1Ucs400zissUeCD'); // Replace with your Stripe publishable key

function App() {
  const [cart, setCart] = useState([]);
  const [user] = useState('testuser'); // For demo, static user
  const [orderComplete, setOrderComplete] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart(prev => {
      const found = prev.find(item => item.product._id === product._id);
      if (found) {
        return prev.map(item => item.product._id === product._id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product._id !== productId));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleOrderComplete = () => {
    setCart([]);
    setOrderComplete(true);
    navigate('/order-confirmation');
  };

  return (
    <>
      <nav style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} onRemoveFromCart={handleRemoveFromCart} onCheckout={handleCheckout} />} />
        <Route path="/checkout" element={
          <Elements stripe={stripePromise}>
            <CheckoutPage cart={cart} user={user} onOrderComplete={handleOrderComplete} />
          </Elements>
        } />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
