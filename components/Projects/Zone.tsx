import { Heading, Text, Box, Stack, useColorModeValue, Center, Image, Button, SimpleGrid, useDisclosure, Link} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Zone() {
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
        'https://cdn.discordapp.com/attachments/985521628500877322/1029649049663582248/Untitled_design_7.png'
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
      <Link href='https://github.com/charlezs/Game-Zone' isExternal>Game Zone</Link>
    </Heading>
    <Text
            textTransform={'uppercase'}
            justifyContent={'right'}
            alignItems={'end'}
            alignSelf={'flex-end'}
            color={'grey.200'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('grey', 'grey')}
            p={2}
            rounded={'md'}>
            Reddit Clone
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
                  bg={'black'}
                  _hover={{
                    bgGradient:'linear(to-r, white, black)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, grey, black)',
                  }}
              >
                <Text color='white'>
                What Is It?<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4} fontSize={14}>
              ⚙️ Built with: Javascript, Express.js, Heroku, SQL
              <br></br>
              <br></br>
              🌐 A reddit clone for gamers to show off what games they are interested in!
              </Text>
            </Box>
</Box>
</Center>

)}
