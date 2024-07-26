import React, { useState } from 'react';
import '../css/DonateMoney.css';

const DonateMoney = () => {
    const [amount, setAmount] = useState('3000');
    const [customAmount, setCustomAmount] = useState('');
    const [details, setDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        pan: '',
        citizenship: 'Indian'
    });
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        if(e.target.value <= Number('999999999')) setCustomAmount(e.target.value);
        setAmount('');
    };

    const handleDetailsChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic
        alert('Form submitted');
    };
    let meals = amount===''?Math.ceil(Number(customAmount)/60):Math.ceil(Number(amount)/60)
    return (
        <div className="donation-form-container">
            <h2>Donate</h2>
            <form className='donate-money' onSubmit={handleSubmit}>
                <div className="amount-selection">
                    <h1>₹{amount===''?customAmount:amount}</h1>
                    <h3>{meals} meal{meals===1?'':'s'}</h3>
                    <div>
                        <label>
                            <input type="radio" value="600" checked={amount === '600'} onChange={handleAmountChange} />
                            ₹600
                        </label>
                        <label>
                            <input type="radio" value="1800" checked={amount === '1800'} onChange={handleAmountChange} />
                            ₹1800
                        </label>
                        <label>
                            <input type="radio" value="3000" checked={amount === '3000'} onChange={handleAmountChange} />
                            ₹3000
                        </label>
                        <label>
                            <input type="radio" value="6000" checked={amount === '6000'} onChange={handleAmountChange} />
                            ₹6000
                        </label>
                    </div>
                    <label>
                        <input type="radio" value="custom" checked={customAmount !== ''} onChange={() => setAmount('')} />
                        Custom Amount:
                        <input type="number" value={customAmount} onChange={handleCustomAmountChange} placeholder="Enter amount" />
                    </label>
                </div>

                <div className="personal-details">
                    <h3>Personal Details</h3>
                    <div>
                        <label>
                            Name:
                            <input type="text" name="name" value={details.name} onChange={handleDetailsChange} required />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" value={details.email} onChange={handleDetailsChange} required />
                        </label>
                        <label>
                            Phone:
                            <input type="tel" name="phone" value={details.phone} onChange={handleDetailsChange} required />
                        </label>
                        <label>
                            Address:
                            <input type="text" name="address" value={details.address} onChange={handleDetailsChange} required />
                        </label>
                        <label>
                            PAN:
                            <input type="text" name="pan" value={details.pan} onChange={handleDetailsChange} required />
                        </label>
                    </div>
                </div>

                <div className="payment-method">
                    <h3>Select Payment Method</h3>
                    <label>
                        <input type="radio" value="debit" checked={paymentMethod === 'debit'} onChange={(e) => setPaymentMethod(e.target.value)} />
                        Debit/Credit Card
                    </label>
                    <label>
                        <input type="radio" value="netbanking" checked={paymentMethod === 'netbanking'} onChange={(e) => setPaymentMethod(e.target.value)} />
                        Net Banking
                    </label>
                    <label>
                        <input type="radio" value="wiretransfer" checked={paymentMethod === 'wiretransfer'} onChange={(e) => setPaymentMethod(e.target.value)} />
                        Wire Transfer
                    </label>
                </div>

                <div className="confirmation">
                    <label>
                        <input type="checkbox" required />
                        I agree to the terms and conditions
                    </label>
                </div>

                <button id='donate' type="submit">Donate</button>
            </form>
        </div>
    );
};

export default DonateMoney;
