import { ReactNode } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Avatar,
  Center,
  Button,
  Link
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
                            'https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg'
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

                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('gray.700', 'gray.400')}
                            px={3}>
                            follow to see dope content! 
                        </Text>
                        <Link href={'https://twitter.com/intent/user?screen_name=learn_charles'} isExternal>
                            <Button
                            w={'100%'}
                            flex={1}
                            mt={7}
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
                        </Link>

                </Box>
        </Center>
  )
}
