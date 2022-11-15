import { Heading, Text, Link, Button, Box, Stack, useDisclosure, Avatar, useColorModeValue} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function MVCard() {
    const { getDisclosureProps, getButtonProps } = useDisclosure()
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
  
    return (
        <Box
        as="article"
        w="100%"
        p={4}
        mb={12}
        borderColor={"black"}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        role="group"
        _hover={{
            borderColor: "black.100",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Avatar
            src={'https://pbs.twimg.com/profile_images/1461903136780480514/JkanyKfn_400x400.jpg'}
            size='2xl'
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://www.mvhq.io/' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            
            bgGradient='linear(to-l, blue, purple.400)'
            bgClip='text'
            >
              MetaverseHQ
              </Heading>
            </Link>
            <Text
              as='em'               
              fontSize='lg'>
              Content Writer
            </Text>
            <Text
            textTransform={'uppercase'}
            color={'white'}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('blue.200', 'purple.400')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              2021 - 2022
            </Text>

            <Text color={'gray.500'} pt={3} fontSize={20}>
            The IVY League of Web3 housing the most prolific NFT Investors, Builders, and Creators in the Web3 space.            
            </Text>
              <Box pt={3}>
              <Button {...buttonProps}
                  width='100%'
                  h={10}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bgGradient='linear(to-r, blue.200, purple.400)'
                  _hover={{
                    bgGradient:'linear(to-r, purple.400, blue.200)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, purple.400, blue.200)',
                  }}
              >
                <Text color='black'>
                More About My Role<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4}>
                During my time at MVHQ I helped create curated content for members of the group, this content took the form of informational blogs on hot topics in the Web3 space.
              </Text>
              </Box>

          </Stack>
        </Stack>                  
      </Box>      );
}