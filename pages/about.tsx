import React from 'react';
import { Heading, Text, Container, SimpleGrid, Box, Stack, Flex} from '@chakra-ui/react';
import AgCard from '../components/Work/AgoraCard';
import VtCard from '../components/Work/VentureCard';
import BpCard from '../components/Work/BlockCard';
import FnCard from '../components/Work/FutureCard';
import MVCard from '../components/Work/MVHQ';
import CarlCard from '../components/Education/CarlCard';
import ArCard from '../components/Work/AirCard';
import { StarIcon } from '@chakra-ui/icons';
import Head from 'next/head';

export default function AgoraCard() {
  return (
    
    <Container maxW={'5xl'} py={12} centerContent>

                <Head>
                <title>About Me</title>
                <meta name="description" content="Charles | Application Developer" />
                <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C5603AQHIu-oeNlFPAA/profile-displayphoto-shrink_800_800/0/1657593782687?e=2147483647&v=beta&t=oxbiWmYuv2Jh3Vxw3JPf4R8l79zOIRSWHS07ZHjOSbc" />
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
                  Full stack web developer, VC, NFT Trader, Founder, Writer, Content Creator, and serial learner of high impact skills. Personal growth is a huge hobbie of mine, that being said, I take every opportunity I get to learn/do something new. Currently I am tackling Web3 Development.
                  </Text>
                </Box>

                <Box>
                  <Heading mb={5}> My Career</Heading>
                  {/* This is where your cards will go */}
                    <AgCard/>
                    <ArCard />
                    <FnCard/>
                    <MVCard />
                    <VtCard/>
                    <BpCard/>
                </Box>

                <Box>
                  <Heading mb={5}> My Education</Heading>
                  {/* This is where your cards will go */}
                    <CarlCard/>
                </Box>

        </SimpleGrid>
      </Container>
  );
}