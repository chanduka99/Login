// Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ options, onSelect,placeholder,label}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value); // Call the parent function with the selected value
  };

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="dropdown" className="formLabel2">
        {label}
      </label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-xl h-[6vh] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
