import { Heading, Text, Box, Stack, useColorModeValue, Center, Image, Button, SimpleGrid, useDisclosure, Link} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function AL() {
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
        'https://media.discordapp.net/attachments/985521628500877322/1029649048929574942/Untitled_design_6.png'
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
      <Link href='https://twitter.com/innercircletech' isExternal>Inner Circle</Link>
    </Heading>
    <Text
            textTransform={'uppercase'}
            justifyContent={'right'}
            alignItems={'end'}
            alignSelf={'flex-end'}
            color={'blue.300'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.100', 'blue.700')}
            p={2}
            rounded={'md'}>
            Elite Community
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
                  bg={'blue.600'}
                  _hover={{
                    bgGradient:'linear(to-r, white, blue.400)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, white, blue.600)',
                  }}
              >
                <Text color='black'>
                What Is It?<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4} fontSize={14}>
              ⚙️ Built with: Love, Care, Affection.
              <br></br>
              <br></br>
              🌐 An elite group of the brightest minds in tech based in Toronto.
              </Text>
              </Box>
</Box>
</Center>

)}
