import { Heading, Text, Link, Button, Box, Stack, useDisclosure, Avatar, useColorModeValue} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function CarlCard() {
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
            borderColor: "red",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Avatar
            src={'https://carleton.ca/brand/wp-content/uploads/social-media-sample-red-247w-1.png'}
            size='2xl'
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://carleton.ca/' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            bgGradient='linear(to-l, #FBF2FF, #E30004)'
            bgClip='text'
            >
              Carleton
              </Heading>
            </Link>
            <Text
              as='em'               
              fontSize='lg'>
              Software Development
            </Text>
            <Text
            textTransform={'uppercase'}
            color={'red.400'}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('red.50', 'red.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              2021 - 2023
            </Text>

            <Text color={'gray.500'} pt={3} fontSize={20}>
            Carleton University is an English-language public research university in Ontario, Canada. </Text>
              <Box pt={3}>
              <Button {...buttonProps}
                  width='100%'
                  h={10}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bgGradient='linear(to-l, #FF2A02, #E30004)'
                  _hover={{
                    bgGradient:'linear(to-r, #FFFFFF, #FF2A02)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, #FFFFFF, #FF2A02)',
                  }}
              >
                <Text color='black'>
                More About It<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4}>
              At Carleton I learnt full-stack web development with the following technologies: HTML 5, CSS3, JavaScript, JQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, GitLabs, Git/GitHub version control, RESTful APIs, JEST, full-stack architecture, MVC architecture, MERN stack, and more.
              </Text>
              </Box>

          </Stack>
        </Stack>                  
      </Box>      );
}