import logo1 from "../assets/Ellipse 3.png";
import logo2 from "../assets/Ellipse 4.png";
import logo3 from "../assets/Ellipse 6.png";
import star from "../assets/star_rate.png";
import rating from "../assets/rating.svg";
import "./home.css";
import location from "../assets/location.png";
import dataCat from "../data/dataCat";
import dataDog from "../data/dataDog";
import comentar from "../data/comentar";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

function Home() {
	const filteredData = dataCat.slice(0, 3);
	const filteredData2 = dataDog.slice(0, 3);
	useEffect(() => {
		AOS.init({ duration: 700 });
	}, []);
	return (
		<>
			<Navbar />
			<div className="bg-[#8EACCD] min-h-screen">
				{/* <img className="flex w-full" src={cat1} alt="image" /> */}
				<div className="bg-image-container1 md:p-24 mt-12 py-12 p-2">
					<div className="relative">
						<p className="text-[65px] text-white md:text-[105px] font-bold blur-sm text-blue-400 inline">ADOCE</p>
						<p className="absolute  inset-0 md:text-[100px]  text-[60px] font-bold font-Poppins font-Poppins">ADOCE</p>
					</div>
					<p className="text-5xl text-white font-Poppins">Adoption Center</p>
				</div>
				<div className="flex justify-center flex-wrap mx-20">
					<p
						data-aos="fade-up"
						className="flex font-inika font-bold text-6xl mt-12"
					>
						Cat Pet
					</p>
				</div>
				<div className="container mx-auto flex flex-row md:justify-between justify-center  mt-12 grid grid md:grid-cols-3 gap-20 ">
					{filteredData.map((item) => (
						<>
							<div
								data-aos="fade-up"
								className="max-w-md rounded-[5%] overflow-hidden shadow-lg p-3 bg-white"
								key={item.id}
							>
								<div className="flex justify-center flex-col">
									<img
										src={item.img}
										alt=""
									/>
								</div>
								<div className="px-6 py-4">
									<div className="font-bold text-3xl lg:text-3xl sm:text-3xl mb-2 font-inika">{item.title}</div>
									<p className="mt-5 font-inika font-normal lg:text-xl sm:text-xl text-[#000]">{item.gender}</p>
									<p className="font-inika font-normal lg:text-xl sm:text-xl text-[#000]">{item.old}</p>
								</div>
								<div className="px-6 pt-4 pb-2">
									<div className="flex flex-wrap gap-2">
										<img
											src={location}
											alt=""
										/>
										<p className="font-inika lg:font-normal lg:text-lg sm:text-lg text-[#000]">{item.location}</p>
									</div>
								</div>
							</div>
						</>
					))}
				</div>
				<div className="flex flex-wrap justify-center mx-20">
					<p
						data-aos="fade-up"
						className="flex font-inika font-bold text-6xl mt-12"
					>
						Dog Pet
					</p>
				</div>
				<div className="container mx-auto flex flex-row md:justify-between justify-center  mt-12 grid grid md:grid-cols-3 gap-20 ">
					{filteredData2.map((item) => (
						<>
							<div
								data-aos="fade-up"
								className="max-w-md rounded-[5%] overflow-hidden shadow-lg p-3 bg-white"
								key={item.id}
							>
								<div className="flex justify-center flex-col">
									<img
										src={item.img}
										alt=""
									/>
								</div>
								<div className="px-8 py-4">
									<div className="font-bold text-3xl lg:text-3xl sm:text-3xl mb-2 font-inika">{item.title}</div>
									<p className="mt-5 font-inika font-normal lg:text-xl sm:text-xl text-[#000]">{item.gender}</p>
									<p className="font-inika font-normal lg:text-xl sm:text-xl text-[#000]">{item.old}</p>
								</div>
								<div className="px-6 pt-4 pb-2">
									<div className="flex flex-wrap gap-2">
										<img
											src={location}
											alt=""
										/>
										<p className="font-inika lg:font-normal lg:text-lg sm:text-lg text-[#000]">{item.location}</p>
									</div>
								</div>
							</div>
						</>
					))}
				</div>
				<div className="flex justify-center ">
					<Link to={"/adopt"}>
						<button
							data-aos="fade-up"
							className="text-3xl bg-[#D9D9D9] hover:bg-white rounded-lg mt-12 p-4"
						>
							All Adopt
						</button>
					</Link>
				</div>
				<div
					data-aos="fade-up"
					className="bg-image-container p-12 w-full mt-12"
					id="home"
				>
					<div
						data-aos="fade-up"
						className="font-baloo md:text-6xl text-3xl font-extrabold md:w-2/4 w-full"
					>
						Prepare Your Home For Your Cat
					</div>
					<p className="md:w-2/4 w-full md:text-3xl text-xl mt-12">ADOCE berkomitmen untuk menyelamatkan dan merawat hewan peliharaan. Kami memperjuangkan hak-hak hewan dan berupaya mencari rumah yang baik bagi mereka.</p>
					<Link to="/about">
						<button className="md:text-3xl text-xl bg-[#D9D9D9] hover:bg-white rounded-lg mt-12 p-4">Selengkapnya</button>
					</Link>
				</div>
			</div>
			<div
				data-aos="fade-up"
				className="container p-12 bg-[#8EACCD] min-w-full mt-2"
			>
				<div
					data-aos="fade-up"
					className="flex justify-center"
				>
					<p
						data-aos="fade-up"
						className="text-3xl text-center text-white px-[15%] font-Poppins"
					>
						Your contribution today will provide essential care for abandoned, injured, and orphaned animals immediately, during their moment of necessity.
					</p>
				</div>
				<div
					data-aos="fade-up"
					className="flex justify-center"
				>
					<Link to={"/donate"}>
						<button className="p-4 text-3xl text-blue-300 bg-white rounded-full mt-6 p-2 font-semibold">Donate Now</button>
					</Link>
				</div>
			</div>
			{/* ============ */}
			<div
				data-aos="fade-up"
				className="container p-12 bg-[#8EACCD] min-w-full mt-2"
			>
				<div
					data-aos="fade-up"
					className="text-3xl font-bold text-white flex justify-center font-Poppins text-5xl"
				>
					What are they saying?
				</div>
				<div
					data-aos="fade-up"
					className="md:flex flex-row gap-12 justify-center mt-12"
				>
					<div data-aos="fade-up">
						<h2 className="text-3xl font-bold">
							<span className="text-[#D9D9D9]">ADOPTION</span>CENTER
						</h2>
						<span className="flex flex-wrap mt-3">
							<img
								className="w-14"
								src={logo1}
								alt=""
							/>
							<img
								className="w-14"
								src={logo2}
								alt=""
							/>
							<img
								className="w-14"
								src={logo3}
								alt=""
							/>
						</span>
						<p className="flex flex-wrap mt-3">
							<img
								className="w-6"
								src={star}
								alt=""
							/>
							<span className="font-semibold">4.5</span> (1.576 Ulasan)
						</p>
					</div>
					<div className="hover:overflow-x-auto overflow-x-hidden md:min-w-[60%] min-w-auto xl:min-w-[80%] flex flex-row gap-8 mt-8 md:mt-0">
						{comentar.map((item, index) => (
							<div
								key={index}
								className="bg-white p-5 rounded-lg mb-4 md:min-w-96 min-w-full"
							>
								<div className="flex flex-row gap-5">
									<img
										className="w-14"
										src={item.img}
										alt=""
									/>
									<div className="flex flex-col">
										<p className="text-blue-500 font-semibold">{item.name}</p>
										<p className="text-[#D9D9D9]">{item.status}</p>
										<img
											src={rating}
											alt=""
										/>
									</div>
								</div>
								<p className="w-3/5 mt-3">{item.comment}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="container p-12 bg-[#8EACCD] min-w-full mt-2">
				<div className="flex justify-center">
					<p className="text-3xl text-center px-[15%]">INI FOOTER</p>
				</div>
				<div className="flex justify-center"></div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
