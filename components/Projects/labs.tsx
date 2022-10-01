import { Heading, Text, Box, Stack, useColorModeValue, Center, Image, Avatar, SimpleGrid} from '@chakra-ui/react';

export default function AL() {
  return (

<Center py={6}>
<Box
  maxW={'600px'}
  w={'full'}
  bg={useColorModeValue('white', 'gray.900')}
  boxShadow={'2xl'}
  rounded={'md'}
  p={6}
  overflow={'hidden'}>
  <Box
    h={'300px'}
    bg={'gray.100'}
    mt={-6}
    mx={-6}
    mb={6}
    pos={'relative'}>
    <Image
      src={
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
      h="100%"
      w="100%"
    />
  </Box>
  <Stack>
  <SimpleGrid columns={[2]} spacing='40px'>
  <Heading
      color={useColorModeValue('gray.700', 'white')}
      fontSize={'2xl'}
      fontFamily={'body'}>
      Agora Labs
    </Heading>
  <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignItems={'center'}
            rounded={'md'}>
            Startup
          </Text>
    </SimpleGrid>


    <Text color={'gray.500'}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum.
    </Text>
  </Stack>
  <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
    <Avatar
      src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
    />
    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
      <Text fontWeight={600}>Achim Rolle</Text>
      <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
    </Stack>
  </Stack>
</Box>
</Center>

)}
