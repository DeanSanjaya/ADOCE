// src/components/DonationPage.js
import { useState } from "react";
import ButtonRow from "../components/ButtonRow";
import ImageDisplay from "../components/ImageDisplay";
import gambar from "../assets/istockphoto-1147987137-612x612.jpg";
import Navbar from "../components/Navbar";

const Donate = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleButtonClick = (image) => {
		setSelectedImage(image);
	};

	return (
		<div>
			<Navbar />
			<div className="flex justify-center items-center h-screen bg-blue-1">
				<div className="container w-9/12 mx-auto flex p-8">
					<div className="w-1/2 rounded-l-md">
						<img
							src={gambar}
							alt="Left Half"
							className="w-full rounded-l-xl"
						/>
					</div>
					<div className="w-1/2 p-4 bg-blue-2 rounded-r-md">
						<p className="text-3xl text-white font-bold my-4 ml-3 ">
							Give a little, save a life.<br></br> Donate now to help them!
						</p>
						<ButtonRow onButtonClick={handleButtonClick} />
						<ImageDisplay selectedImage={selectedImage} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Donate;
