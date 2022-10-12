import { Heading, Text, Link, Button, Box, Stack, useColorModeValue, Image} from '@chakra-ui/react';


export default function Risky() {  
    return (
        <Box
        as="article"
        w="100%"
        p={4}
        mb={12}
        borderColor={useColorModeValue("black", "white")}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        role="group"
        _hover={{
            borderColor: "red",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://medium.com/@char1es/risky-business-losses-and-trading-nfts-f4ee1b5d7951' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            mb={'3'}
            bgGradient='linear(to-l, #FBF2FF, red)'
            bgClip='text'
            >
            Risky Business -Losses and Trading NFTs              
            </Heading>
            </Link>
            <Text
            textTransform={'uppercase'}
            color={useColorModeValue('black','white')}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('red.50', 'red.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              Trading Insights
            </Text>

            <Text color={useColorModeValue('black','white')} pt={3} fontSize={20}>
            Welcome everyone to probably one of the most important articles you’ll read today. As we all know NFT trading is very volatile. With this…            </Text>

          </Stack>
        </Stack>                  
      </Box>      
      );
}