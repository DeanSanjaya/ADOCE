/* eslint-disable react/prop-types */
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement } from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

const FormLoginRegister = (props) => {
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
				bg="#2E51CE"
				color="white"
				w="100%"
				mt={25}
			>
				{props.buttonValue}
			</Button>
		</FormControl>
	);
};

export default FormLoginRegister;
