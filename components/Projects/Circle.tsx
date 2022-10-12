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
      Inner Circle
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
              <Text {...disclosureProps} mt={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit vitae erat sagittis faucibus et nec orci. Donec hendrerit feugiat leo, vitae vehicula est facilisis at. Pellentesque at turpis eget est pulvinar commodo. Morbi magna odio, interdum in lectus scelerisque, lacinia vestibulum tellus. Mauris tincidunt varius orci vel euismod. Donec vehicula leo diam, sit amet pharetra dolor convallis et. Nullam nulla dolor, varius nec velit id, ultrices sodales nisl. Ut in pharetra turpis. Vestibulum elementum dolor imperdiet, blandit ante quis, suscipit neque. Aenean vestibulum ligula metus, id ultrices lacus molestie vel. Aliquam ac turpis accumsan, gravida erat sed, laoreet felis. Etiam eget molestie mi, vel bibendum dolor.

</Text>
              </Box>
</Box>
</Center>

)}
