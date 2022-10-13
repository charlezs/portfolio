import { Heading, Text, Box, Stack, useColorModeValue, Center, Image, Button, SimpleGrid, useDisclosure} from '@chakra-ui/react';
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
        'https://media.discordapp.net/attachments/985521628500877322/1029999521335353375/Untitled_design_10.png'
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
      My Site
    </Heading>
    <Text
            textTransform={'uppercase'}
            justifyContent={'right'}
            alignItems={'end'}
            alignSelf={'flex-end'}
            color={useColorModeValue('white', 'black')}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('black', 'white')}
            p={2}
            rounded={'md'}>
            Portfolio
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
                  bg={'white'}
                  _hover={{
                    bgGradient:'linear(to-r, black, white)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, black, white)',
                  }}
              >
                <Text color='black'>
                What Is It?<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4} fontSize={14}>
              ⚙️ Built with: TypeScript, Next.js, Vercel
              <br></br>
              <br></br>
              🌐 A website that tell&apos;s you all you need to know about me!
              </Text>
              </Box>
</Box>
</Center>

)}
