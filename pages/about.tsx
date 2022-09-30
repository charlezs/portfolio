import React from 'react';
import { Heading, Text, Container, SimpleGrid, Box, Stack, Flex} from '@chakra-ui/react';
import AgCard from '../components/Work/AgoraCard';
import VtCard from '../components/Work/VentureCard';
import BpCard from '../components/Work/BlockCard';
import FnCard from '../components/Work/FutureCard';
import { StarIcon } from '@chakra-ui/icons';
import Head from 'next/head';

export default function AgoraCard() {
  return (
    
    <Container maxW={'5xl'} py={12} centerContent>

                <Head>
                <title>About Me</title>
                <meta name="description" content="Teo | Mobile Application Developer" />
                <link rel="icon" href="/profile_picture.png" />
                </Head>  

      <SimpleGrid columns={1} spacing={10}>
                <Box>
                <Flex>
                <Stack pr={3}>
                      <StarIcon w={9} h={9}/>
                </Stack>
                <Heading size='xl'>About Me</Heading>
                </Flex>  
                
                  <Text color={'gray.500'} fontSize={'lg'} pt={6} pl={3}>
                  I am a mobile developer with 2 years ++ working experience. My developer journey started with Android (Java) during my internship. After graduation, this journey continued with Kotlin, official language for Android development. 👔
                  </Text>
                  <Text color={'gray.500'} fontSize={'lg'} pt={6} pl={3}>
                  As full-time mobile developer , I am lucky enough to receive a MacBook from my company, hence my journey continue with React Native, cross-platform mobile framework (Android & iOS). My passion in mobile development never ended and I am ready to take on new challenges! 🔥                  </Text>
                </Box>

                <Box>
                  <Heading mb={5}> My Career</Heading>
                  {/* This is where your cards will go */}
                    <AgCard/>
                    <FnCard/>
                    <VtCard/>
                    <BpCard/>
                </Box>

                <Box>
                  <Heading> My Education</Heading>
                  <Text color={'gray.500'} fontSize={'lg'}>hi ihiisdhsiahda diahsdasdnasidna fhkfbdkbfdjbfsdfs idjaisdhn sdhsjdbs dshsj dishdaidhjn jsb daihdsibib</Text>
                </Box>

        </SimpleGrid>
      </Container>
  );
}