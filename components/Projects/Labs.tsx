import { Heading, Text, Box, Stack, useColorModeValue, Center, Image, Button, SimpleGrid, useDisclosure, Link} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Labs() {
  const { getDisclosureProps, getButtonProps } = useDisclosure()
  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()

  return (

<Center py={6}>
<Box
  maxW={'600px'}
  w={'full'}
  bg={useColorModeValue('white', 'gray.900')}
  boxShadow={'2xl'}
  rounded={'md'}
  p={6}
  overflow={'hidden'}>
  <Box
    bg={'gray.100'}
    mt={-6}
    mx={-6}
    mb={6}
    pos={'relative'}>
    <Image
      src={
        'https://cdn.discordapp.com/attachments/985521628500877322/1029637181062529024/Untitled_design_3.png'
      }
      h="100%"
      w="100%"
    />
  </Box>
  <Stack>
  <SimpleGrid columns={2} spacing={55}>
  <Heading
      color={useColorModeValue('gray.700', 'white')}
      fontSize={'2xl'}
      fontFamily={'body'}>
      <Link href='https://www.agoralabs.xyz/' isExternal>Agora Labs</Link>
    </Heading>
    <Text
            textTransform={'uppercase'}
            justifyContent={'right'}
            alignItems={'end'}
            alignSelf={'flex-end'}
            color={'purple.200'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('purple.50', 'purple.900')}
            p={2}
            rounded={'md'}>
            My Startup 🔮
            </Text>
    </SimpleGrid>
  </Stack>
  <Box pt={3}>
              <Button {...buttonProps}
                  width='100%'
                  h={10}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bg={'purple.200'}
                  _hover={{
                    bgGradient:'linear(to-r, #FBF2FF, #DC86FA)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, #FBF2FF, #DC86FA)',
                  }}
              >
                <Text color='black'>
                What Is It?<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4} fontSize={14}>
              ⚙️ Built with: TypeScript, GraphQL, Node.js, Next.js, Firebase, AWS, Heroku, Vercel
              <br></br>
              <br></br>
              🌐 A platform where creators can unlock their potential of their fanbase with content gating tools built for web3. Powered by social tokens and NFTs.
              </Text>
              </Box>
</Box>
</Center>

)}
