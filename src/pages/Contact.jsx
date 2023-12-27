import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import emailjs from "emailjs-com";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

const Contact = () => {
	const [name, setName] = useState("");
	const [telepon, setTelepon] = useState("");
	const [message, setMessage] = useState("");
	const serviceID = "service_gw9k3d9";
	const templateID = "template_iywmg52";
	const publicKey = "GDZWqzwmWUDfLqmY7";
	const submitSuccess = () => {
		withReactContent(Swal)
			.fire({
				title: "Success to Submit",
				icon: "success",
				confirmButtonColor: "#3085d6",
				confirmButtonText: "Yes",
			})
			.then((result) => {
				if (result.isConfirmed) {
					Navigate("/contact");
				}
			});
	};
	const submit = (e) => {
		e.preventDefault();
		const template = {
			from_name: name,
			from_telepon: telepon,
			to_name: "deansanjaya040703@gmail.com",
			message: message,
		};
		emailjs
			.send(serviceID, templateID, template, publicKey)
			.then((response) => {
				console.log("Email sent successfully:", response);
				submitSuccess();
				setName("");
				setTelepon("");
				setMessage("");
			})
			.catch((error) => {
				console.error("Email sending failed:", error);
			});
	};
	return (
		<div>
			<Navbar />
			<div className="bg-[#8EACCD] h-screen justify-center flex-col flex px-[75px]">
				<div className="flex justify-between items-start w-full">
					<div className="w-2/4">
						<h1 className="text-white font-bold text-5xl mb-2">Contact US</h1>
						<div className="bg-white h-1 w-20" />
						<div className="flex flex-col space-y-10 mt-20">
							<div className="flex items-center space-x-5">
								<div className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
									<MarkunreadIcon />
								</div>
								<div className="text-xl font-medium">adoce@gmail.com</div>
							</div>
							<div className="flex items-center space-x-5">
								<div className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
									<CallIcon />
								</div>
								<div className="text-xl font-medium">+62 889-8888-8888</div>
							</div>
							<div className="flex items-center space-x-5">
								<div className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
									<LocationOnIcon />
								</div>
								<div className="text-xl font-medium">Jl. Persil No. 21</div>
							</div>
						</div>
					</div>
					<div className="w-2/4">
						<div className="bg-[#337CCF] w-[670px]  rounded-xl flex justify-center">
							<form
								onSubmit={submit}
								action=""
								className="w-[80%] py-10  flex flex-col"
							>
								<label
									htmlFor="nama"
									className="font-medium text-xl mb-3 text-white"
								>
									Your Name
								</label>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									id="nama"
									type="text"
									placeholder="Your name"
									className="bg-white placeholder:text-slate-300 outline-none rounded-xl w-full py-3 px-4"
								/>
								<label
									htmlFor="tel"
									className="font-medium text-xl my-3 text-white"
								>
									Phone Number
								</label>
								<input
									value={telepon}
									onChange={(e) => setTelepon(e.target.value)}
									id="tel"
									type="number"
									placeholder="Your Phone"
									className="bg-white placeholder:text-slate-300 outline-none rounded-xl w-full py-3 px-4"
								/>
								<label
									htmlFor="message"
									className="font-medium text-xl my-3 text-white"
								>
									Message
								</label>
								<input
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									id="message"
									type="text"
									placeholder="Message"
									className="bg-white placeholder:text-slate-300 outline-none rounded-xl w-full py-3 px-4 h-32"
								/>
								<button
									type="submit"
									className="mt-10 w-full bg-[#0766AD] hover:bg-blue-800 py-3 rounded-xl font-semibold text-white text-xl"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
