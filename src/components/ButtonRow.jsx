// src/components/ButtonRow.js
import React, { useState } from 'react';
import image1 from '../assets/bni.png';
import image2 from '../assets/dana.png';
import image3 from '../assets/qris-1.jpg';
import donate1 from '../assets/donate1-01.png';
import donate2 from '../assets/donate2-01.png';
import donate3 from '../assets/donate3.png';

const ButtonRow = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { id: 1, label: image1, image: donate1 },
    { id: 2, label: image2, image: donate2 },
    { id: 3, label: image3, image: donate3 },
  ];

  const handleButtonClick = (button) => {
    onButtonClick(button.image);
    setActiveButton(button.id);
  };

  return (
    <div className="flex justify-center space-x-10 mb-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button)}
          className={`py-2 px-4 rounded focus:outline-none ${activeButton === button.id ? 'bg-blue-1 text-white' : 'bg-white hover:outline outline-offset-1 outline-white'}`}
        >
          <img src={button.label} alt={`Button ${button.id}`} className="w-full h-full max-w-12 max-h-12 object-cover" />
        </button>
      ))}
    </div>
  );
};

export default ButtonRow;
