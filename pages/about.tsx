import React from 'react';
import { Heading, Text, Container, Flex, SimpleGrid, Box, Highlight, Stack, Avatar} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import Image from 'next/image'



export default function About() {
  return (
    <Container maxW={'5xl'} py={12} centerContent>
      <SimpleGrid columns={1} spacing={10}>
                <Box>
                  <Heading> 
                  <Highlight
                    query='About Me'
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                  >
                    About Me
                    </Highlight>
                    </Heading>
                  <Text color={'gray.500'} fontSize={'lg'} pt={6} pl={3}>
                  I am a mobile developer with 2 years ++ working experience. My developer journey started with Android (Java) during my internship. After graduation, this journey continued with Kotlin, official language for Android development. 👔
                  </Text>
                  <Text color={'gray.500'} fontSize={'lg'} pt={6} pl={3}>
                  As full-time mobile developer , I am lucky enough to receive a MacBook from my company, hence my journey continue with React Native, cross-platform mobile framework (Android & iOS). My passion in mobile development never ended and I am ready to take on new challenges! 🔥                  </Text>
                </Box>

                <Box>
                  <Heading pb={3}> My Career</Heading>
                  <Link href='https://www.agoralabs.xyz/' isExternal style={{ textDecoration: 'none' }}>
                      <Box
                          as="article"
                          w="100%"
                          p={4}
                          borderColor={"gray.300"}
                          borderRadius={5}
                          borderWidth="1px"
                          transition=".5s"
                          cursor="pointer"
                          display="flex"
                          role="group"
                          _hover={{
                              borderColor: "grey",
                          }}
                      >        
                          <Stack direction={'row'} align={'center'}>
                            <Avatar
                              src={'https://pbs.twimg.com/profile_images/1546662871160979458/DIZpFR5S_400x400.jpg'}
                              size='2xl'
                            />
                            <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
                              <Heading fontWeight={600} pb={2}>Agora Labs</Heading>
                              <Text
                                textTransform={'uppercase'}
                                color={'white'}
                                fontWeight={300}
                                fontSize={'sm'}
                                bg={'grey'}
                                p={2}
                                alignSelf={'flex-start'}
                                rounded={'md'}>
                                Founder / CMO
                              </Text>

                              <Text color={'gray.500'} pt={3} fontSize={20}>
                              Built the crypto infrastructure, using DeSo blockchain API, for web3 creators to reward and engage their tokenized communities. Reached $500K market cap in 72 hours on DESO Blockchain at launch
Communicated and collaborated with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on daily basis                           
                              </Text>
                            </Stack>
                          </Stack>                  
                        </Box>
                  </Link>
                </Box>

                <Box>
                  <Heading> My Education</Heading>
                  <Text color={'gray.500'} fontSize={'lg'}>hi ihiisdhsiahda diahsdasdnasidna fhkfbdkbfdjbfsdfs idjaisdhn sdhsjdbs dshsj dishdaidhjn jsb daihdsibib</Text>
                </Box>

        </SimpleGrid>
      </Container>
  );
}