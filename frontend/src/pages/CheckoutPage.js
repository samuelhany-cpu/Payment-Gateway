import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutPage = ({ cart, user, onOrderComplete }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // 1. Create payment intent
      const paymentRes = await axios.post(`${process.env.REACT_APP_API_URL}/api/checkout/create-payment-intent`, {
        amount: total,
        currency: 'usd',
      });
      const clientSecret = paymentRes.data.clientSecret;

      // 2. Confirm card payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      if (result.error) {
        setError(result.error.message);
        setLoading(false);
        return;
      }
      if (result.paymentIntent.status === 'succeeded') {
        // 3. Create order in backend
        await axios.post(`${process.env.REACT_APP_API_URL}/api/orders`, {
          user,
          items: cart.map(item => ({ product: item.product._id, quantity: item.quantity })),
          total,
          paymentIntentId: result.paymentIntent.id,
        });
        onOrderComplete();
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="checkout-list">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CheckoutPage; 