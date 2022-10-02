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
            borderColor: "green.200",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://www.agoralabs.xyz/' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            mb={'3'}
            bgGradient='linear(to-l, #FBF2FF, green.300)'
            bgClip='text'
            >
              Trading NFTs feat. PARSEC
              </Heading>
            </Link>
            <Text
            textTransform={'uppercase'}
            color={useColorModeValue('black', 'white')}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('green.50', 'green.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              Trading Insights
            </Text>
            <Text color={useColorModeValue('black', 'white')} pt={3} fontSize={20}>
            Should I buy? Do I sell? I feel like holding but should I? What should I do!?            
            </Text>
          </Stack>
        </Stack>                  
      </Box>      
      );
}