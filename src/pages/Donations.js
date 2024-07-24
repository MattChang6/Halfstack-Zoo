import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Donations() {
	const [donationAmount, setDonationAmount] = useState('');
	const [donorName, setDonorName] = useState('');
	const [selectedDate, setSelectedDate] = useState(null);
	const [cart, setCart] = useState([]);
	const [checkout, setCheckout] = useState(false);

	const presetAmounts = [10, 25, 50];

	const handleAmountChange = (e) => {
		setDonationAmount(e.target.value);
	};

	const handleNameChange = (e) => {
		setDonorName(e.target.value);
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const handleAddToCart = (e) => {
		e.preventDefault();
		const donation = {
			amount: donationAmount,
			name: donorName,
			date: selectedDate ? selectedDate.toLocaleDateString() : "Not selected"
		};
		setCart([...cart, donation]);
		setDonationAmount('');
		setDonorName('');
		setSelectedDate(null);
	};

	const handleCheckout = () => {
		setCheckout(true);
	};

	const getTotalAmount = () => {
		return cart.reduce((total, donation) => total + parseFloat(donation.amount), 0);
	};

	return (
		<>
			<h1>Zoo Donations</h1>
			<h3>Support Our Zoo!</h3>
			<p>Your generous donations help us provide the best care for our animals and improve our facilities. Thank you for your support!</p>
			
			<br />
			
			<form onSubmit={handleAddToCart}>
				<div>
					<p>Select a donation amount:</p>
					{presetAmounts.map((amount) => (
						<label key={amount}>
							<input
								type="radio"
								value={amount}
								checked={donationAmount === amount.toString()}
								onChange={handleAmountChange}
							/>
							${amount}
						</label>
					))}
					<label>
						<input
							type="radio"
							value=""
							checked={donationAmount === ''}
							onChange={() => setDonationAmount('')}
						/>
						Other:
						<input
							type="number"
							value={donationAmount}
							onChange={handleAmountChange}
							disabled={donationAmount !== ''}
							min="0"
						/>
					</label>
				</div>
				<div>
					<label>
						Your Name:
						<input
							type="text"
							value={donorName}
							onChange={handleNameChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Select Donation Date:
						<DatePicker
							selected={selectedDate}
							onChange={handleDateChange}
							inline
						/>
					</label>
				</div>
				<button type="submit">Add to Cart</button>
			</form>

			<h2>Donation Cart</h2>
			<ul>
				{cart.map((donation, index) => (
					<li key={index}>
						{donation.name} - ${donation.amount} on {donation.date}
					</li>
				))}
			</ul>
			<p>Total Amount: ${getTotalAmount()}</p>
			<button onClick={handleCheckout} disabled={cart.length === 0}>Proceed to Checkout</button>

			{checkout && (
				<div>
					<h3>Checkout Summary</h3>
					{cart.map((donation, index) => (
						<p key={index}>
							{donation.name} donated ${donation.amount} on {donation.date}
						</p>
					))}
					<p>Total Amount: ${getTotalAmount()}</p>
					<p>Thank you for your generous donations!</p>
				</div>
			)}
		</>
	);
}
