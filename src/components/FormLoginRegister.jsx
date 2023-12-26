/* eslint-disable react/prop-types */
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement, Text } from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FormLoginRegister = ({ buttonValue, type }) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [alertEmail, setAlertEmail] = useState("");
	const [alertPassword, setAlertPassword] = useState("");
	const loginFailed = () => {
		withReactContent(Swal)
			.fire({
				title: "Akun Anda Belum terdaftar",
				icon: "error",
				confirmButtonColor: "#3085d6",
				confirmButtonText: "Yes",
			})
			.then((result) => {
				if (result.isConfirmed) {
					navigate("/login");
				}
			});
	};
	const loginSuccess = () => {
		withReactContent(Swal)
			.fire({
				title: "Login Sukses",
				icon: "success",
				confirmButtonColor: "#3085d6",
				confirmButtonText: "Yes",
			})
			.then((result) => {
				if (result.isConfirmed) {
					navigate("/adopt");
				}
			});
	};
	const registerSuccess = () => {
		withReactContent(Swal)
			.fire({
				title: "Pendaftaran Berhasil",
				icon: "success",
				confirmButtonColor: "#3085d6",
				confirmButtonText: "Yes",
			})
			.then((result) => {
				if (result.isConfirmed) {
					navigate("/login");
				}
			});
	};
	const isValidEmail = (email) => {
		const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
		return emailRegex.test(email);
	};
	const handleEmailChange = (e) => {
		const inputEmail = e.target.value;
		if (inputEmail.trim() === "") {
			setAlertEmail("Email Tidak Boleh Kosong");
		} else if (!isValidEmail(inputEmail)) {
			setAlertEmail("Email Tidak Valid");
		} else {
			setAlertEmail("");
		}
		setEmail(inputEmail);
	};
	const handlePasswordChange = (e) => {
		const inputPassword = e.target.value;
		if (inputPassword.trim() === "") {
			setAlertPassword("Password Tidak Boleh Kosong");
		} else if (inputPassword.length < 8) {
			setAlertPassword("Password harus lebih dari 8 karakter");
		} else {
			setAlertPassword("");
		}
		setPassword(inputPassword);
	};
	const handleAuth = async () => {
		if (alertEmail === "" && alertPassword === "") {
			try {
				if (type === "login") {
					const response = await axios.get("http://localhost:3001/users", {
						params: { email, password },
					});
					const user = response.data[0];
					if (user) {
						loginSuccess();
					} else {
						loginFailed();
					}
				} else if (type === "register") {
					const response = await axios.post("http://localhost:3001/users", { email, password });
					console.log("Register success:", response.data);
					registerSuccess();
				}
			} catch (error) {
				console.error(`${type} error:`, error.message);
			}
		}
	};
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	return (
		<FormControl>
			<FormLabel
				mt={50}
				color="white"
				htmlFor="email"
			>
				Email
			</FormLabel>
			<InputGroup>
				<InputLeftAddon
					borderLeftRadius="24px"
					pointerEvents="none"
				>
					<EmailIcon color="black" />
				</InputLeftAddon>
				<Input
					name="email"
					value={email}
					onChange={handleEmailChange}
					autoComplete="off"
					bg="white"
					borderRadius="24px"
					placeholder="you@example.com"
					type="email"
					id="email"
				/>
			</InputGroup>
			<Text
				mt={1}
				color={"white"}
				position={"absolute"}
			>
				{alertEmail}
			</Text>
			<FormLabel
				mt={8}
				color="white"
				htmlFor="password"
			>
				Password
			</FormLabel>
			<InputGroup>
				<InputLeftAddon
					borderLeftRadius="24px"
					pointerEvents="none"
				>
					<LockIcon color="black" />
				</InputLeftAddon>
				<Input
					name="password"
					onChange={handlePasswordChange}
					value={password}
					id="password"
					bg="white"
					borderRadius="24px"
					placeholder="Enter your password"
					type={show ? "text" : "password"}
				/>

				<InputRightElement>
					<Button
						bg="white"
						borderRightRadius="24px"
						onClick={handleClick}
					>
						{show ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>
			<Text
				mt={1}
				color={"white"}
				position={"absolute"}
			>
				{alertPassword}
			</Text>
			<Button
				onClick={handleAuth}
				bg="#2E51CE"
				color="white"
				w="100%"
				mt={50}
				borderRadius="24px"
			>
				{buttonValue}
			</Button>
		</FormControl>
	);
};

export default FormLoginRegister;
