import {
    Box,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Avatar,
    Center,
    Button,
  } from '@chakra-ui/react';
  
  
  export default function Twitter() {
    return (
  
  
          <Center py={6}>
                  <Box
                  maxW={'320px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  p={6}
                  textAlign={'center'}
                  border='5px' 
                  borderColor='red.200'
                  >
                          <Avatar
                              size={'xl'}
                              src={
                              'https://cdn.discordapp.com/guilds/938711734221426739/users/326438296077074442/avatars/61614f4d781dfe9d26891e21a8fef65c.png?size=4096'
                              }
                              mb={4}
                              pos={'relative'}
                              _after={{
                              content: '""',
                              w: 4,
                              h: 4,
                              bg: 'green.300',
                              border: '2px solid white',
                              rounded: 'full',
                              pos: 'absolute',
                              bottom: 0,
                              right: 3,
                              }}
                          />
                          <Heading fontSize={'2xl'} fontFamily={'body'}>
                              Twitter
                          </Heading>
                          <Text fontWeight={600} color={'gray.500'} mb={4}>
                              @learn_charles
                          </Text>
                          <Text
                              textAlign={'center'}
                              color={useColorModeValue('gray.700', 'gray.400')}
                              px={3}>
                              DM me on Twitter to connect 
                          </Text>
  
                          <Text
                              textAlign={'center'}
                              color={useColorModeValue('gray.700', 'gray.400')}
                              px={3}>
                              OR 
                          </Text>
  
                          <Text
                              textAlign={'center'}
                              color={useColorModeValue('gray.700', 'gray.400')}
                              px={3}>
                              follow to see dope content! 
                          </Text>
  
                          <Stack mt={8} direction={'row'} spacing={4}>
                              <Button
                              flex={1}
                              fontSize={'sm'}
                              rounded={'full'}
                              _focus={{
                                  bg: 'gray.200',
                              }}>
                              Message
                              </Button>
                              <Button
                              flex={1}
                              fontSize={'sm'}
                              rounded={'full'}
                              bg={'blue.400'}
                              color={'white'}
                              boxShadow={
                                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                              }
                              _hover={{
                                  bg: 'blue.500',
                              }}
                              _focus={{
                                  bg: 'blue.500',
                              }}>
                              Follow
                              </Button>
                          </Stack>
                  </Box>
          </Center>
    )
  }
  