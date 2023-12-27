/* eslint-disable react/prop-types */
// Menggunakan eslint directive untuk menonaktifkan peringatan terkait prop-types pada komponen
import { Button } from "@chakra-ui/button";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Komponen Card
export const Card = ({ img, title, gender, old, location }) => {
	const [textButton, setTextButton] = useState("Adopt Now");
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const showSwal = () => {
		withReactContent(Swal)
			.fire({
				title: "Apakah kamu yakin?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes",
			})
			.then((result) => {
				if (result.isConfirmed) {
					setTextButton("Waiting list");
					setButtonDisabled(true);
					Swal.fire({
						title: "Waiting list",
						text: "Kamu akan di hubungi via email 2x24 jam",
						icon: "success",
					});
				}
			});
	};
	return (
		// Container untuk kartu dengan menggunakan Tailwind CSS classes
		<div className="py-6 px-8 shadow-custom border border-[#F2F7FB] bg-white flex flex-col items-start space-y-5 font-inika rounded-3xl">
			{/* Gambar kartu, menggunakan src atau gambar default jika src tidak diberikan */}
			<img
				src={img}
				width={271}
				height={229}
				alt="cat"
			/>
			{/* Nama kucing */}
			<p className="text-black font-bold text-3xl text-left">{title}</p>
			{/* Informasi gender dan usia kucing */}
			<div className="flex flex-col space-y-1">
				<p className="text-black text-xl text-left">{gender}</p>
				<p className="text-black text-xl text-left">{old}</p>
			</div>
			{/* Lokasi kucing dengan ikon dan teks */}
			<div className="flex flex-row space-x-2">
				<LocationIcon /> {/* Menggunakan komponen LocationIcon untuk menampilkan ikon */}
				<p className="text-black text-xl text-left">{location}</p>
			</div>
			<Button
				w="100%"
				m="auto"
				onClick={showSwal}
				colorScheme={buttonDisabled ? "red" : "blue"}
				isDisabled={buttonDisabled}
			>
				{textButton}
			</Button>
		</div>
	);
};

// Komponen untuk menampilkan ikon lokasi
const LocationIcon = () => (
	// SVG JSX untuk ikon lokasi
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.003 11.73C12.4483 11.73 12.8283 11.5717 13.143 11.255C13.4577 10.9383 13.615 10.5573 13.615 10.112C13.615 9.66667 13.4567 9.28667 13.14 8.972C12.8227 8.65733 12.4417 8.5 11.997 8.5C11.5523 8.5 11.1723 8.65867 10.857 8.976C10.5423 9.29267 10.385 9.67367 10.385 10.119C10.385 10.5643 10.5433 10.9443 10.86 11.259C11.1773 11.5737 11.5583 11.731 12.003 11.731V11.73ZM12 19.678C13.88 18.042 15.366 16.3783 16.458 14.687C17.55 12.995 18.096 11.5317 18.096 10.297C18.096 8.46767 17.517 6.95767 16.359 5.767C15.201 4.57633 13.748 3.981 12 3.981C10.2527 3.981 8.79967 4.576 7.64101 5.766C6.48234 6.956 5.90334 8.466 5.90401 10.296C5.90401 11.5307 6.45001 12.994 7.54201 14.686C8.63467 16.3773 10.1207 18.0407 12 19.676V19.678ZM12 21.02C9.65001 18.942 7.88001 17.004 6.69001 15.206C5.49934 13.408 4.90401 11.7717 4.90401 10.297C4.90401 8.18167 5.59267 6.437 6.97001 5.063C8.34801 3.68767 10.0247 3 12 3C13.9753 3 15.652 3.68733 17.03 5.062C18.4073 6.436 19.096 8.18067 19.096 10.296C19.096 11.7707 18.501 13.407 17.311 15.205C16.1203 17.003 14.35 18.941 12 21.019V21.02Z"
			fill="black"
		/>
	</svg>
);
