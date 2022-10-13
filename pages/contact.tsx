import Twitter from '../components/SocialMedia/Twitter';
import Calendly from '../components/SocialMedia/Calendly';
import LinkedIn from '../components/SocialMedia/LinkedIn';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Avatar,
  Center,
  Link,
  Badge,
  SimpleGrid
} from '@chakra-ui/react';
import Head from 'next/head';

export default function ThreeTier() {
  return (
    <Box py={12} mb={4}>

      <Head>
          <title>Contact Me</title>
          <meta name="description" content="Charles | Application Developer" />
          <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C5603AQHIu-oeNlFPAA/profile-displayphoto-shrink_800_800/0/1657593782687?e=2147483647&v=beta&t=oxbiWmYuv2Jh3Vxw3JPf4R8l79zOIRSWHS07ZHjOSbc" />
      </Head>
        
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Let&apos;s Talk Soon!
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          I love meeting and connecting with new people, don&apos;t be afraid to reach out!
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
    <SimpleGrid columns={[2, null, 3]} spacing='40px' p={10} mb={5}>
        <Calendly/>
        <Twitter />
        <LinkedIn/>
    </SimpleGrid>
      </Stack>
    </Box>
  );
}