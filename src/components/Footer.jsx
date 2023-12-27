// Footer.jsx
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Flex
			as="footer"
			align="center"
			justify="center"
			p="4"
			// bg="#8EACCD"
			color="white"
			position="absolute"
			bottom="0"
			width="100%"
		>
			<Text>&copy; 2023 ADOCE</Text>
		</Flex>
	);
};

export default Footer;
