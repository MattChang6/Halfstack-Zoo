import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Tickets() {
	const [ticketQuantities, setTicketQuantities] = useState({
		Adult: 0,
		Child: 0,
		Senior: 0
	});
	const [selectedDate, setSelectedDate] = useState(null);
	const [submitted, setSubmitted] = useState(false);

	const handleQuantityChange = (e) => {
		const { name, value } = e.target;
		setTicketQuantities({
			...ticketQuantities,
			[name]: parseInt(value, 10)
		});
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<>
			<h1>Tickets & Reservations</h1>
			<h3>Plan your visit</h3>
			<h1 style={{ color: "green" }}>Wild fun awaits!</h1>
			<br />
			<h6>Explore!</h6>

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
						Senior:
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
						<DatePicker
							selected={selectedDate}
							onChange={handleDateChange}
							inline
						/>
					</label>
				</div>
				<button type="submit">Buy Tickets</button>
			</form>

			{submitted && (
				<div>
					<h3>Order Summary</h3>
					<p>Adult tickets: {ticketQuantities.Adult}</p>
					<p>Child tickets: {ticketQuantities.Child}</p>
					<p>Senior tickets: {ticketQuantities.Senior}</p>
					<p>Total tickets: {ticketQuantities.Adult + ticketQuantities.Child + ticketQuantities.Senior}</p>
					<p>Visit Day: {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}</p>
				</div>
			)}
		</>
	);
}
