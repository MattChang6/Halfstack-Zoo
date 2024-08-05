import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Cart({ cart = [] }) {  // Default cart to an empty array
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paypalEmail: ''
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    alert('Payment submitted');
  };

  return (
    <div className="cart">
      <header>
        <h1> Shopping Cart Check Out </h1>
      </header>
      <main>
        <ul>
          
        </ul>

        <form onSubmit={handleSubmit}>
          <label htmlFor="payment-method">Payment Method:</label>
          <select
            id="payment-method"
            name="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>

          <div id="payment-details">
            {paymentMethod === 'credit-card' ? (
              <div>
                <label htmlFor="card-number">Card Number:</label>
                <input
                  type="text"
                  id="card-number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="expiry-date">Expiry Date:</label>
                <input
                  type="text"
                  id="expiry-date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            ) : (
              <div>
                <label htmlFor="paypal-email">PayPal Email:</label>
                <input
                  type="email"
                  id="paypal-email"
                  name="paypalEmail"
                  value={formData.paypalEmail}
                  onChange={handleChange}
                  required
                />
                <p>Log in to your PayPal account to complete the payment.</p>
              </div>
            )}
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </main>
    </div>
  );
}

// PropTypes for type-checking
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};
