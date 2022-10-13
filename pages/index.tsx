import {
  Container
} from '@chakra-ui/react';
import TStack from '../components/TStack';
import IntroMe from '../components/Intro';
import LFStack from '../components/LFStack'
import Head from 'next/head';
export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <Head>
          <title>Home</title>
          <meta name="description" content="Charles | Application Developer" />
          <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C5603AQHIu-oeNlFPAA/profile-displayphoto-shrink_800_800/0/1657593782687?e=2147483647&v=beta&t=oxbiWmYuv2Jh3Vxw3JPf4R8l79zOIRSWHS07ZHjOSbc" />
      </Head>
      <IntroMe />
      <TStack />
      <LFStack />
      
    </Container>

    
  );
}

