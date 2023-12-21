// Mengimport React dan NavLink dari react-router-dom
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Komponen Navbar
export const Navbar = () => {
	const navigate = useNavigate();
	const onLoginClick = () => {
		navigate("/login");
	};
	return (
		// Container utama navbar dengan menggunakan Tailwind CSS classes
		<div className="bg-brand py-4 px-4 xl:px-0 fixed z-10 top-0 w-full">
			{/* Container dengan lebar maksimum dan posisi tengah */}
			<div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
				{/* Logo atau judul situs */}
				<span className="text-white font-bold text-xl">ADOCE</span>

				{/* Menu navigasi dan tombol login */}
				<div className="flex flex-row items-center space-x-12">
					{/* Menu navigasi dengan daftar rute yang menggunakan NavLink */}
					<ul className="flex flex-row items-center space-x-5">
						{/* Setiap item menu menggunakan NavLink dengan properti "to" yang menentukan rute */}
						<li>
							{/* NavLink untuk rute '/' */}
							<NavLink to="/">
								{/* Konten yang akan ditampilkan di dalam NavLink, dengan memanfaatkan prop isActive untuk menentukan apakah rute ini aktif */}
								{({ isActive }) => (
									<div className="flex flex-col">
										<span className="text-base text-white">Home</span>
										{/* Garis bawah putih yang akan muncul jika rute aktif */}
										<span className={isActive ? "h-px w-full bg-white" : "hidden"}></span>
									</div>
								)}
							</NavLink>
						</li>
						{/* (Item-item menu lainnya mengikuti pola yang sama) */}
						<li>
							<NavLink to="/adopt">
								{({ isActive }) => (
									<div className="flex flex-col">
										<span className="text-base text-white">Adopt</span>
										<span className={isActive ? "h-px w-full bg-white" : "hidden"}></span>
									</div>
								)}
							</NavLink>
						</li>
						<li>
							<NavLink to="/donate">
								{({ isActive }) => (
									<div className="flex flex-col">
										<span className="text-base text-white">Donate</span>
										<span className={isActive ? "h-px w-full bg-white" : "hidden"}></span>
									</div>
								)}
							</NavLink>
						</li>
						<li>
							<NavLink to="/About">
								{({ isActive }) => (
									<div className="flex flex-col">
										<span className="text-base text-white">About Us</span>
										<span className={isActive ? "h-px w-full bg-white" : "hidden"}></span>
									</div>
								)}
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact">
								{({ isActive }) => (
									<div className="flex flex-col">
										<span className="text-base text-white">Contact Us</span>
										<span className={isActive ? "h-px w-full bg-white" : "hidden"}></span>
									</div>
								)}
							</NavLink>
						</li>
					</ul>
					{/* Tombol Login */}
					<button
						onClick={onLoginClick}
						className="text-white font-bold text-xl"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};
