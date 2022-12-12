import { Heading, Text, Link, Button, Box, Stack, useColorModeValue, Image} from '@chakra-ui/react';


export default function HereW() {  
    return (
        <Box
        as="article"
        w="100%"
        p={4}
        mb={12}
        borderColor={useColorModeValue("black","white")}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        role="group"
        _hover={{
            borderColor: "orange",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://medium.com/@char1es/here-we-are-but-how-did-we-get-here-5b059e6025eb' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            mb={'3'}
            bgGradient='linear(to-l, #FBF2FF, orange)'
            bgClip='text'
            >
Here we are but, how did we get here?            </Heading>
            </Link>
            <Text
            textTransform={'uppercase'}
            color={useColorModeValue('black','white')}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('orange.50', 'orange.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              My Life
            </Text>

            <Text color={useColorModeValue('black','white')} pt={3} fontSize={20}>
            Welcome to my first Medium article, what better way to kick it off than by writing about me. Who I am, what I do, and how I got here…
            </Text>
          </Stack>
        </Stack>                  
      </Box>      
      );
}