import React from 'react';
import { Heading, Text, Container, SimpleGrid, Box, Flex, Stack, Divider, useColorModeValue, Center, Image, Avatar} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import Labs from '../components/Projects/Labs';
import Zone from '../components/Projects/Zone';
import Cheer from '../components/Projects/Cheer';
import InnerCircle from '../components/Projects/Circle';
import Folio from '../components/Projects/Portfolio';
import Coins from '../components/Projects/Coins';

export default function Projects() {
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
                  Here are my favorite projects I've built so far! Feel free to check them out on my Github aswell.
                    </Text>
                  </Box>
                  <Divider />
                  <SimpleGrid columns={[1]}>
                    <Labs />
                    <Cheer />
                    <Folio />
                    <Coins />
                    <InnerCircle />
                    <Zone />
                  </SimpleGrid>
          </SimpleGrid>
        </Container>
    );
  }