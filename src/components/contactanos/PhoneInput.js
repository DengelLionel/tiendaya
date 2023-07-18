import React, { useState,useEffect} from 'react';
import Select from 'react-select';
import { isValidPhoneNumber } from 'libphonenumber-js';

const countryCodes = [
  { value: '51', label: 'Peru (+51)' },
  { value: '1', label: 'USA (+1)' },
  // Añade más códigos de país aquí
];

const PhoneInput = ({ setPhone, error, setError }) => {
    const [selectedCountry,setSelectedCountry]=useState(null)
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
      if (selectedCountry) {
        let completePhoneNumber = `+${selectedCountry?.value}${userInput}`;
        if (/^\d+$/.test(userInput) && isValidPhoneNumber(completePhoneNumber)) {
          setError(null);
          setPhone(completePhoneNumber);
        } else if (userInput !== '') {
          setError("El número de teléfono no es válido.");
        }
      }
    }, [userInput, selectedCountry]);

    const handlePhoneChange = (e) => {
      setUserInput(e.target.value);
    };

    return (
      <div>
      <Select
  instanceId="your-unique-id"
  options={countryCodes}
  value={selectedCountry}
  onChange={setSelectedCountry}
  className="mb-2"
/>
        <input
          className="w-full text-gray-500 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={userInput}
          onChange={handlePhoneChange}
          placeholder="Número de Teléfono"
        />
        {error && (
          <p className="text-red-500 text-xs italic mt-2">
            {error}
          </p>
        )}
      </div>
    );
};

export default PhoneInput;
