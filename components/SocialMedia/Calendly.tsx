import {
    Box,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Avatar,
    Center,
    Button,
    Link,
  } from '@chakra-ui/react';
  
  
  export default function Calendly() {
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
                              'https://cdn.discordapp.com/attachments/985521628500877322/1025254585780146197/unknown.png'
                              }
                              mb={4}
                          />
                          <Heading fontSize={'2xl'} fontFamily={'body'}>
                              Calendly
                          </Heading>
                          <Text
                              textAlign={'center'}
                              color={useColorModeValue('gray.700', 'gray.400')}
                              px={3}>
                              Let&apos;s e-meet sometime! 
                          </Text>
      
                            <Link href='https://calendly.com/charles1x/meet-charles?month=2022-09' isExternal>
                              <Button
                              flex={1}
                              fontSize={'sm'}
                              rounded={'full'}
                              bg={'blue.400'}
                              color={'white'}
                              mt={7}
                              boxShadow={
                                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                              }
                              _hover={{
                                  bg: 'blue.500',
                              }}
                              _focus={{
                                  bg: 'blue.500',
                              }}>
                              Book Time
                              </Button>
                            </Link>

                  </Box>
          </Center>
    )
  }
  