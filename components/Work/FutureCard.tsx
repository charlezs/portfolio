import { Heading, Text, Link, Button, Box, Stack, useDisclosure, Avatar, useColorModeValue} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function FnCard() {
    const { getDisclosureProps, getButtonProps } = useDisclosure()
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
  
    return (
        <Box
        as="article"
        w="100%"
        p={4}
        mb={12}
        borderColor={"white"}
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
          <Link href='https://www.agoralabs.xyz/' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            
            bgGradient='linear(to-r, #FBF2FF, #DC86FA)'
            bgClip='text'
            >
              Agora Labs
              </Heading>
            </Link>
            <Text
              as='em'               
              fontSize='lg'>
              Founder / CMO
            </Text>
            <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              2021 - 2202
            </Text>

            <Text color={'gray.500'} pt={3} fontSize={20}>
             A platform where creators can unlock their potential of their fanbase with content gating tools built for web3. Powered by social tokens and NFTs.
            </Text>
              <Box pt={3}>
              <Button {...buttonProps}
                  width='100%'
                  h={7}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bgGradient='linear(to-l, #C030ED, #DC86FA)'
                  _hover={{
                    bgGradient:'linear(to-r, #FBF2FF, #DC86FA)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, #FBF2FF, #DC86FA)',
                  }}
              >
                <Text color='black'>
                More About It<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4}>
              I am a mobile developer with 2 years ++ working experience. My developer journey started with Android (Java) during my internship. After graduation, this journey continued with Kotlin, official language for Android development. 👔

              As full-time mobile developer , I am lucky enough to receive a MacBook from my company, hence my journey continue with React Native, cross-platform mobile framework (Android & iOS). My passion in mobile development never ended and I am ready to take on new challenges! 🔥                                  <br />
              </Text>
              </Box>

          </Stack>
        </Stack>                  
      </Box>      );
}