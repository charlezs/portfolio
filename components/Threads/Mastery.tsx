import { Heading, Text, Link, Button, Box, Stack, useColorModeValue, Image, HStack} from '@chakra-ui/react';


export default function Mastery() {  
    return (
        <Box
        as="article"
        w="100%"
        p={4}
        mb={12}
        borderColor={useColorModeValue('black', 'white')}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        role="group"
        _hover={{
            borderColor: "yellow.200",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://twitter.com/learn_charles/status/1572222057534099456?s=20&t=n4Ngz6rlQkINIE2ygf0s8Q' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            mb={'3'}
            bgGradient='linear(to-l, yellow.200, yellow.300)'
            bgClip='text'
            >
              Cracking the Mastery Code
              </Heading>
            </Link>
            <Text
            textTransform={'uppercase'}
            color={useColorModeValue('black', 'black')}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('yellow.50', 'yellow.200')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              Learning
            </Text>
            <Text color={useColorModeValue('black', 'white')} pt={3} fontSize={20}>
            Mastery, how do we really achieve it? A thread on cracking the mastery code.            
            </Text>
          </Stack>
        </Stack>                  
      </Box>      
      );
}