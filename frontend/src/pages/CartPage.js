import React from 'react';

const CartPage = ({ cart, onRemoveFromCart, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return (
    <div className="cart-list">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty.</p> : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.product._id}>
                {item.product.name} x {item.quantity} = ${item.product.price * item.quantity}
                <button onClick={() => onRemoveFromCart(item.product._id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p><b>Total: ${total.toFixed(2)}</b></p>
          <button onClick={onCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage; 