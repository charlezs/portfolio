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
  Button,
  SimpleGrid
} from '@chakra-ui/react';

export default function ThreeTier() {
  return (
    <Box py={12} mb={4}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Let's Talk Soon!
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          I love meeting and connecting with new people, don't be afraid to reach out!
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