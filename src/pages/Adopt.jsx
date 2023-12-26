import { useState } from "react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Navbar } from "../components/navbar";
import dataCat from "../data/dataCat";
import dataDog from "../data/dataDog";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Adopt() {
	// State untuk mengontrol apakah kucing tambahan harus ditampilkan atau tidak
	const [showCat, setShowCat] = useState(false);
	const [showDog, setShowDog] = useState(false);
	const filteredData = dataCat.slice(0, 6);
	const filteredData2 = dataCat.slice(6, 9);
	const filteredData3 = dataDog.slice(0, 6);
	const filteredData4 = dataDog.slice(6, 9);
	useEffect(() => {
		AOS.init({ duration: 700 });
	}, []);
	return (
		<>
			<Navbar />
			{/* Bagian awal/atas */}
			<div className="h-screen w-full relative flex justify-start items-center">
				<div className=" max-w-7xl mx-auto w-full">
					<div className="flex flex-col space-y-5">
						<div className=" h-3.5 w-[280px] bg-[#D9D9D9]" />
						<div className=" flex flex-col space-y-1">
							<h1 className=" text-7xl text-white font-bold">Save Animal, Save a Life!</h1>
							<h2 className="text-3xl text-white">&quot;Every Creature Deserves a Chance to Thrive.&quot;</h2>
						</div>
					</div>
				</div>
				{/* Bagian contact us */}
				<div className=" absolute right-0 bottom-0">
					<div className="flex flex-col items-end py-12 px-20 bg-brand/30 backdrop-blur-xl">
						<p className="text-white text-2xl">Lost or Found a Pet?</p>
						<p className="text-white text-2xl">Call: 085903795561</p>
					</div>
				</div>
				{/* Background image  */}
				<div className="bg-hero-pattern bg-no-repeat bg-cover w-full h-full absolute -z-1" />
			</div>
			{/* Akhir Bagian awal/atas */}
			{/* Bagian kedua */}
			<div
				data-aos="fade-up"
				className="flex flex-col justify-center space-y-20 bg-main py-12 items-center"
			>
				<h3 className=" text-black text-4xl font-semibold">Available Cats</h3>
				{
					<div
						data-aos="fade-up"
						className="grid grid-cols-3 gap-28"
					>
						{filteredData.map((item) => (
							<Card
								key={item.id}
								{...item}
							/>
						))}
						{showCat ? (
							<>
								{filteredData2.map((item) => (
									<Card
										key={item.id}
										{...item}
									/>
								))}
							</>
						) : null}
					</div>
				}
				{!showCat ? (
					<Button
						onClick={() => setShowCat(true)}
						name="View All Cats"
					/>
				) : null}
			</div>
			{/* Bagian ketiga */}
			<div className="flex flex-col justify-center space-y-20 bg-main pt-24 pb-12 items-center">
				<h3
					data-aos="fade-up"
					className=" text-black text-4xl font-semibold"
				>
					Available Dogs
				</h3>
				<di
					data-aos="fade-up"
					className="grid grid-cols-3 gap-28"
				>
					{filteredData3.map((item) => (
						<Card
							key={item.id}
							{...item}
						/>
					))}
					{showDog ? (
						<>
							{filteredData4.map((item) => (
								<Card
									key={item.id}
									{...item}
								/>
							))}
						</>
					) : null}
				</di>
				{!showDog ? (
					<Button
						onClick={() => setShowDog(true)}
						name="View All Dogs"
					/>
				) : null}
			</div>
			{/* Bagian keempat */}
			<div className=" bg-brand w-full py-8">
				<div className="max-w-3xl mx-auto flex flex-col space-y-5 items-center">
					<p className="text-white text-3xl font-bold">Care Animals</p>
					<p className=" text-xl text-white text-center">Your contribution today will provide essential care for abandoned, injured, and orphaned animals immediately, during their moment of necessity.</p>
					<Button
						name="Donate Now"
						className="bg-white text-brand"
					/>
				</div>
			</div>
			<div className=" bg-main w-full py-3">
				<div className="max-w-xl mx-auto">
					<p className="text-brand text-center text-sm">Copyright 2023</p>
				</div>
			</div>
			<Footer/>
		</>
	);
}
