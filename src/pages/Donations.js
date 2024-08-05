import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Donations() {
  const [donationAmount, setDonationAmount] = useState(null);
  const [isRecurring, setIsRecurring] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleAmountChange = (amount, button) => {
    setDonationAmount(amount);
    setCustomAmount("");
    setSelectedButton(button);
  };

  const handleCustomAmountChange = (e) => {
    setDonationAmount(parseFloat(e.target.value) || 0);
    setCustomAmount(e.target.value);
    setSelectedButton("custom");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleIsRecurringChange = (e) => {
    setIsRecurring(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    navigate('/shopping-cart', {
      state: {
        donationAmount,
        isRecurring,
        selectedDate
      }
    });
  };

  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);
  nextMonth.setDate(new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0).getDate());

  return (
    <>
      <h1>Zoo Donations</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Donation Amount:
            <div>
              <button
                type="button"
                onClick={() => handleAmountChange(5, 'button5')}
                style={{ backgroundColor: selectedButton === 'button5' ? 'lightblue' : '' }}
              >
                $5
              </button>
              <button
                type="button"
                onClick={() => handleAmountChange(10, 'button10')}
                style={{ backgroundColor: selectedButton === 'button10' ? 'lightblue' : '' }}
              >
                $10
              </button>
              <button
                type="button"
                onClick={() => handleAmountChange(20, 'button20')}
                style={{ backgroundColor: selectedButton === 'button20' ? 'lightblue' : '' }}
              >
                $20
              </button>
              <input
                type="number"
                placeholder="Other"
                value={customAmount}
                onChange={handleCustomAmountChange}
                min="0"
                step="0.01"
                style={{ backgroundColor: selectedButton === 'custom' ? 'lightblue' : '' }}
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            Recurring Donation:
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={handleIsRecurringChange}
            />
          </label>
        </div>
        <div>
          <label>
            Select Donation Date:
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            minDate={today}
            maxDate={nextMonth}
          />
        </div>
        <div>
          <button type="submit">Submit Donation</button>
        </div>
      </form>

      {donationAmount !== null && (
        <div>
          <h3>Your Donation:</h3>
          <p>${donationAmount} {isRecurring ? " (Recurring)" : ""}</p>
        </div>
      )}

      {submitted && (
        <div>
          <h3>Thank You!</h3>
          <p>Your generous donation of ${donationAmount} {isRecurring ? " (Recurring)" : ""} has been received.</p>
          <p>Donation Date: {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}</p>
        </div>
      )}
    </>
  );
}
