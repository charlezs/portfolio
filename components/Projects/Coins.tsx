import { Heading, Text, Box, Stack, useColorModeValue, Center, Image, Button, SimpleGrid, useDisclosure, Link} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Coins() {
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
        'https://media.discordapp.net/attachments/985521628500877322/1029978120918409247/Untitled_design_9.png'
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
      <Link href='https://web-three-dapp.vercel.app/' isExternal>ETH Portfolio Tracker</Link>
    </Heading>
    <Text
            textTransform={'uppercase'}
            justifyContent={'right'}
            alignItems={'end'}
            alignSelf={'flex-end'}
            color={'black'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('orange.100', 'orange.500')}
            p={2}
            rounded={'md'}>
            Web3
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
                  bg={'orange.100'}
                  _hover={{
                    bgGradient:'linear(to-r, white, orange.400)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, white, orange.400)',
                  }}
              >
                <Text color='black'>
                What Is It?<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4} fontSize={14}>
              ⚙️ Built with: TypeScript, React, Vercel, Ethers.js, 
              <br></br>
              <br></br>
              🌐 A website that show's you all the stats of an eth wallet, from amount of eth, to tokens, to history.
              </Text>
              </Box>
</Box>
</Center>

)}
