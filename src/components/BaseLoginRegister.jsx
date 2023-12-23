/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Box, Center, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import FormLoginRegister from "./FormLoginRegister";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const BaseLoginRegister = (props) => {
	return (
		<Flex
			align="center"
			justify="center"
			w="100%"
			h="100vh"
			bg="#8EACCD"
		>
			<Box
				borderRadius="24px"
				w="50%"
				h="80%"
				bg="#4280C5"
			>
				<Grid
					h="100%"
					templateColumns="repeat(2, 1fr)"
				>
					<GridItem>
						<Box
							h="100%"
							bgImage="url('../src/assets/front-image.svg')"
							bgSize="cover"
							borderLeftRadius="24px"
						>
							<Link to={"/"}>
								<ArrowBackIcon
									cursor={"pointer"}
									mt={2}
									ml={2}
								/>
							</Link>
						</Box>
					</GridItem>
					<GridItem
						p="2rem"
						h="100%"
					>
						<Center
							h="50px"
							color="white"
						>
							<Text
								textTransform="uppercase"
								fontWeight="bold"
								fontSize={32}
							>
								{props.type}
							</Text>
						</Center>
						<FormLoginRegister
							type={props.type}
							buttonValue={props.buttonValue}
						></FormLoginRegister>
						<Divider mt={5} />
						<Center
							flexDirection="column"
							h="21%"
							w="100%"
							color="white"
						>
							{props.value1}
							<Text
								color="black"
								cursor="pointer"
							>
								{props.value2}
							</Text>
						</Center>
					</GridItem>
				</Grid>
			</Box>
		</Flex>
	);
};

export default BaseLoginRegister;
