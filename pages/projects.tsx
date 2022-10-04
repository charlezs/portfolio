import React from 'react';
import { Heading, Text, Container, SimpleGrid, Box, Flex, Stack, Divider, useColorModeValue, Center, Image, Avatar} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import AL from '../components/Projects/Labs';
import Zone from '../components/Projects/Zone';
import Cheer from '../components/Projects/Cheer';
import InnerCircle from '../components/Projects/Circle';
import Folio from '../components/Projects/Portfolio';

export default function projects() {
    return (
      <Container maxW={'5xl'} py={12} centerContent>
        <SimpleGrid columns={1} spacing={10}>
            <Box>
                <Flex>
                <Stack pr={3}>
                      <StarIcon w={9} h={9}/>
                </Stack>
                <Heading size='xl'>My Projects</Heading>
                </Flex>   
                <Text color={'gray.500'} fontSize={'lg'} pt={6} pl={3}>
                    I am a mobile developer with 2 years ++ working experience. My developer journey started with Android (Java) during my internship. After graduation, this journey continued with Kotlin, official language for Android development. 👔
                    </Text>
                  </Box>
                  <Divider />
                  <SimpleGrid columns={[1]}>
                    <AL />
                    <Cheer />
                    <Folio />
                    <InnerCircle />
                    <Zone />
                  </SimpleGrid>
          </SimpleGrid>
        </Container>
    );
  }