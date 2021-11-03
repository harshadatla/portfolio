import { Box, Container, Heading, Text } from "@chakra-ui/layout";

const Page = () => {
    return (
        <Container maxW='container.lg'>
            <Box borderRadius='lg' bg='red' p='3' mb='6' align='center' >
                Hello I am the best developer
            </Box>
            <Box>
                <Heading as='h2' variant='page-title'>
                    Harsha Datla
                </Heading>
                <Text>
                    React, Java and Game Developer
                </Text>
            </Box>
        </Container>
    )
}

export default Page;