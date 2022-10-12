import { Heading, Text, Link, Button, Box, Stack, useColorModeValue, Image, HStack} from '@chakra-ui/react';


export default function Bear() {  
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
            borderColor: "yellow.800",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://twitter.com/learn_charles/status/1574039784355295233?s=20&t=n4Ngz6rlQkINIE2ygf0s8Q' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            mb={'3'}
            bgGradient='linear(to-l, #FBF2FF, yellow.800)'
            bgClip='text'
            >
              How to: Bear Market
              </Heading>
            </Link>
            <Text
            textTransform={'uppercase'}
            color={useColorModeValue('black', 'white')}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('yellow.800', 'yellow.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              Survival
            </Text>
            <Text color={useColorModeValue('black', 'white')} pt={3} fontSize={20}>
            A thread on how to make it through a bear market on top. TLDR: Increase your assets and decrease exposure.             
            </Text>
          </Stack>
        </Stack>                  
      </Box>      
      );
}