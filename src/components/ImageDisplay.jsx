/* eslint-disable react/prop-types */
// src/components/ImageDisplay.js
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
