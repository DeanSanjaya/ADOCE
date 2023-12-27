// src/components/ImageDisplay.js
import React from 'react';

const ImageDisplay = ({ selectedImage }) => {
  return (
    <div className="flex justify-center items-center">
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-56 object-contain bg-white"
        />
      )}
    </div>
  );
};

export default ImageDisplay;
