import React from 'react';
import { Box, Heading, Center, VStack, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <VStack>
        <Box py='2rem'>
          <img width='200rem' alt='logo' height='200rem' src='logo.png'></img>
        </Box>
        <Heading minWidth='10rem' size='2xl' pb='1rem'>
          DreamNote
        </Heading>
        <Text px='10rem' fontSize='xl' align='center'>
          Hello! We are Vedanshi, Ariana and Ava and we created Dreamnote! Dreamnote is a platform
          to take notes and get summarized information with key elements on the notes you have
          taken. For example, if you are taking notes for class and need to study for a test, you
          can use our functionality to store those notes and get helpful summaries to prep for exams
          more efficiently.
        </Text>
        <Text px='10rem' py='1rem' align='center' fontSize='xl'>
          We created this web application during the IWC hackathon - “Hack the Patriarchy” that took
          place at Northeastern University on Saturday, November 19, 2022.
        </Text>

        <Text px='10rem' fontSize='xl'>
          We hope you enjoy the product!
        </Text>

        <Link to='login'>
          <Button colorScheme='purple' my='4rem' size='lg'>
            Log In
          </Button>
        </Link>
      </VStack>
    </div>
  );
}

export default Home;
