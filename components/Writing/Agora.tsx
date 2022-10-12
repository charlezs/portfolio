import { Heading, Text, Link, Button, Box, Stack, useColorModeValue, Image} from '@chakra-ui/react';


export default function GBA() {  
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
            borderColor: "purple",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://medium.com/@char1es/goodbye-agora-hello-world-dfffea813f36' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            mb={'3'}
            bgGradient='linear(to-l, #FBF2FF, purple)'
            bgClip='text'
            >
Goodbye Agora, Hello World.
           </Heading>
            </Link>
            <Text
            textTransform={'uppercase'}
            color={useColorModeValue('black','white')}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('purple.50', 'purple.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              Startup
            </Text>

            <Text color={useColorModeValue('black','white')} pt={3} fontSize={20}>
            Agora Labs, my company, has been acquired by Talent Protocol (a $50M company) So, how did we make this happen, and what’s next?

</Text>
          </Stack>
        </Stack>                  
      </Box>      
      );
}