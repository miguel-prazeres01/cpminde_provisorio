import { Container, Stack, Text, Image, Flex, Center, AbsoluteCenter} from "@chakra-ui/react";
import { FaRegFaceSmile } from "react-icons/fa6";

// updated this after recording. Make sure you do the same so that it can work in production
export const BASE_URL = "/"
function App() {

	return (
		<Stack minH={"100vh"}>
			<AbsoluteCenter>
				<Container centerContent>
					<Center>
						<Text align={"center"} fontSize={{ base: "medium", md: "2xl" }}>Sim, este é mesmo o site da CPM</Text>
					</Center>
					
					<Center>	
						<Flex gap={2}>
							<Text fontSize={{ base: "small", md: "medium" }} align={"center"}>Estamos só a terminar umas coisas</Text>
							<FaRegFaceSmile/>
						</Flex>
					</Center>
					<Image boxSize='100px' src='/casa do povo.png' alt='casa do povo'/>
				</Container>
				
			</AbsoluteCenter>
		</Stack>
	);
}

export default App;