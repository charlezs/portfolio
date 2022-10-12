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
        borderColor={"black"}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        role="group"
        _hover={{
            borderColor: "blue.100",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Avatar
            src={'https://futurenorth.ca/wp-content/uploads/2022/06/FutureNorth-Header-EN-Logo.png'}
            size='2xl'
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://futurenorth.ca/' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            
            bgGradient='linear(to-l, #FFFFFF, #88D1F1)'
            bgClip='text'
            >
              Future North
              </Heading>
            </Link>
            <Text
              as='em'               
              fontSize='lg'>
              Business Administrative 
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
             A 5-year initiative dedicated to improving available resources and opportunities for youth and young adults.
            </Text>
              <Box pt={3}>
              <Button {...buttonProps}
                  width='100%'
                  h={10}                  
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bgGradient='linear(to-l, #88D1F1, #FFFFFF)'
                  _hover={{
                    bgGradient:'linear(to-r, #FBF2FF, #88D1F1)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, #FBF2FF, #88D1F1)',
                  }}
              >
                <Text color='black'>
                More About It<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4}>
                At Future North I had the role of Social Media Manager. Here I helped make social media calanders for posting, creating engaging video content, writing helpful content to help youth learn high-value topics, and also, as previously stated, I engaged in Business Admin here through going to meetings and helping with organizing company structure/data.
              </Text>
              </Box>

          </Stack>
        </Stack>                  
      </Box>      
    );
}