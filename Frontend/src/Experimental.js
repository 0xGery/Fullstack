import React, { useState } from 'react';
import axios from 'axios';

function Experimental() {
  const [formData, setFormData] = useState({
    totalDeposit: '',
    currentPrice: '',
    rangeSpread: '',
    debtRatio: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/calculate', formData);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error('Error sending calculation request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="totalDeposit"
        value={formData.totalDeposit}
        onChange={handleChange}
        placeholder="Total Deposit"
      />
      <input
        type="number"
        name="currentPrice"
        value={formData.currentPrice}
        onChange={handleChange}
        placeholder="Current ETH Price"
      />
      <input
        type="number"
        name="rangeSpread"
        value={formData.rangeSpread}
        onChange={handleChange}
        placeholder="Range Spread"
      />
      <input
        type="number"
        name="debtRatio"
        value={formData.debtRatio}
        onChange={handleChange}
        placeholder="Debt Ratio"
      />
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Experimental;
