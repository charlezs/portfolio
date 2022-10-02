import React from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Divider,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import ArtOne from '../components/Writing/ArticleOne';
import HereW from '../components/Writing/Here';
import Risky from '../components/Writing/Risky';
import Bear from '../components/Threads/Bear';
import Mastery from '../components/Threads/Mastery';

export default function writing() {
    return (
      <Container maxW={'5xl'} py={12} centerContent>
        <SimpleGrid columns={1} spacing={10}>
          <Box>
            <Flex>
                <Stack pr={3}>
                      <StarIcon w={9} h={9}/>
                </Stack>
                <Heading size='xl'>My Writing</Heading>
            </Flex>   
            <Text color={'gray.500'} fontSize={'lg'} pt={6} pl={3}>
                    I am a mobile developer with 2 years ++ working experience. My developer journey started with Android (Java) during my internship. After graduation, this journey continued with Kotlin, official language for Android development. 👔
            </Text>
          </Box>
          <Divider />
          <Box>
          <Heading mb={'5'}> Articles 📕</Heading>
          <ArtOne />
          <Risky />
          <HereW />
        </Box>

        <Box>
          <Heading mb={'5'}> Threads 🧵</Heading>
          <Mastery />
          <Bear />
        </Box>
        </SimpleGrid>
      </Container>
    );
  }