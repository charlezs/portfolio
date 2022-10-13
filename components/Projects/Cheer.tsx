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
    h={'300px'}
    bg={'gray.100'}
    mt={-6}
    mx={-6}
    mb={6}
    pos={'relative'}>
    <Image
      src={
        'https://cdn.discordapp.com/attachments/985521628500877322/1029644333051293706/Untitled_design_4.png'
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
      <Link href='https://cheers-to-you-xnlr.vercel.app/login?redirectTo=%2F' isExternal>Cheers!</Link>
    </Heading>
    <Text
            textTransform={'uppercase'}
            justifyContent={'right'}
            alignItems={'end'}
            alignSelf={'flex-end'}
            color={'blue.200'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            rounded={'md'}>
            Greeting Software 🔮
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
                  bg={'blue.200'}
                  _hover={{
                    bgGradient:'linear(to-r, white, blue.100)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, white, blue.200)',
                  }}
              >
                <Text color='black'>
                What Is It?<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4} fontSize={14}>
              ⚙️ Built with: TypeScript, MongoDB, Prisma, Next.js, TailwindCSS, AWS, Vercel
              <br></br>
              <br></br>
              🌐 A platform where teams can communicate and give eachother praise(cheers) while being able to see who has been praised!
              </Text>
              </Box>
</Box>
</Center>

)}
