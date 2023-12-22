/* eslint-disable react/prop-types */
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement } from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormLoginRegister = ({ buttonValue, type }) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleAuth = async () => {
		try {
			if (type === "login") {
				const response = await axios.get("http://localhost:3001/users", {
					params: { email, password },
				});

				const user = response.data[0];

				if (user) {
					// Logika login berhasil
					// const token = generateToken(); // Implementasikan fungsi generateToken sesuai kebutuhan
					console.log("Login success:");
					navigate("/adopt");
					// Handle successful login logic, misalnya, menyimpan token di state atau cookie
				} else {
					console.log("Login failed");
					// Handle login failure logic
				}
			} else if (type === "register") {
				const response = await axios.post("http://localhost:3001/users", { email, password });
				console.log("Register success:", response.data);
				// Handle successful register logic, mungkin melakukan navigasi ke halaman login
			}
		} catch (error) {
			console.error(`${type} error:`, error.message);
			// Handle login or register error logic
		}
	};

	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	return (
		<FormControl>
			<FormLabel
				mt={50}
				color="white"
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
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					autoComplete="off"
					bg="white"
					borderRadius="24px"
					placeholder="you@example.com"
					type="email"
					id="email"
				/>
			</InputGroup>
			<FormLabel
				mt={25}
				color="white"
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
					onChange={(e) => setPassword(e.target.value)}
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
			<Button
				onClick={handleAuth}
				bg="#2E51CE"
				color="white"
				w="100%"
				mt={25}
				borderRadius="24px"
			>
				{buttonValue}
			</Button>
		</FormControl>
	);
};

export default FormLoginRegister;
