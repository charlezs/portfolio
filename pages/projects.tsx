import React from 'react';
import { Heading, Text, Container, SimpleGrid, Box, Highlight, Divider} from '@chakra-ui/react';

export default function projects() {
    return (
      <Container maxW={'5xl'} py={12} centerContent>
        <SimpleGrid columns={1} spacing={10}>
                  <Box>
                    <Heading size='2xl'> 
                    <Highlight
                      query='Projects'
                      styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                    >
                      My Projects
                      </Highlight>
                      </Heading>
                    <Text color={'gray.500'} fontSize={'lg'} pt={6} pl={3}>
                    I am a mobile developer with 2 years ++ working experience. My developer journey started with Android (Java) during my internship. After graduation, this journey continued with Kotlin, official language for Android development. 👔
                    </Text>
                  </Box>
                  <Divider />
  
                  <Box>
                    {/* This is where your cards will go */}
                  </Box>
          </SimpleGrid>
        </Container>
    );
  }