import {
  Container
} from '@chakra-ui/react';
import TStack from '../components/TStack';
import IntroMe from '../components/Intro';
import LFStack from '../components/LFStack'

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <IntroMe />
      <TStack />
      <LFStack />
      
    </Container>

    
  );
}

