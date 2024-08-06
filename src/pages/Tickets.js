import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Tickets() {
  const [ticketQuantities, setTicketQuantities] = useState({
    Adult: 0,   //Initialize Ticket Quantity
    Child: 0,
    Senior: 0
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const ticketPrices = {
    Adult: 20, // Price for an Adult ticket
    Child: 10, // Price for a Child ticket
    Senior: 15 // Price for a Senior ticket
  };

  const navigate = useNavigate();

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setTicketQuantities({
      ...ticketQuantities,
      [name]: parseInt(value, 10) || 0
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const calculateTotalAmount = () => {
    const total = ticketQuantities.Adult * ticketPrices.Adult +
                  ticketQuantities.Child * ticketPrices.Child +
                  ticketQuantities.Senior * ticketPrices.Senior;
    return total;
  };

  const handleBuyTickets = () => {
    const totalAmount = calculateTotalAmount();
    const queryParams = new URLSearchParams({
      ...ticketQuantities,
      total: totalAmount,
      date: selectedDate ? selectedDate.toISOString() : ''
    }).toString();

    navigate(`/cart?${queryParams}`);
  };

  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);

  return (
    <>
      <h1>Tickets & Reservations</h1>
      <h3>Plan your visit</h3>

      <div>
        <p>Ticket Prices:</p>
        <ul>
          <li>Adult: ${ticketPrices.Adult}</li>
          <li>Child: ${ticketPrices.Child}</li>
          <li>Senior: ${ticketPrices.Senior}</li>
        </ul> 
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Adult:
            <input
              type="number"
              name="Adult"
              value={ticketQuantities.Adult}
              onChange={handleQuantityChange}
              min="0"
            />
          </label>
        </div>
        <div>
          <label>
            Child:
            <input
              type="number"
              name="Child"
              value={ticketQuantities.Child}
              onChange={handleQuantityChange}
              min="0"
            />
          </label>
        </div>
        <div>
          <label>
            Senior 65+:
            <input
              type="number"
              name="Senior"
              value={ticketQuantities.Senior}
              onChange={handleQuantityChange}
              min="0"
            />
          </label>
        </div>
        <div>
          <label>
            Select Visit Day:
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
          <button type="button" onClick={handleSubmit}>Show Summary</button>
        </div>
      </form>

      {submitted && (
        <div>
          <h3>Order Summary</h3>
          <p>Adult tickets: {ticketQuantities.Adult}</p>
          <p>Child tickets: {ticketQuantities.Child}</p>
          <p>Senior tickets: {ticketQuantities.Senior}</p>
          <p>Total tickets: {ticketQuantities.Adult + ticketQuantities.Child + ticketQuantities.Senior}</p>
          <p>Visit Day: {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}</p>
          <p>Total amount to pay: ${calculateTotalAmount()}</p>
          <button type="button" onClick={handleBuyTickets}>Buy Tickets</button>
        </div>
      )}
    </>
  );
}