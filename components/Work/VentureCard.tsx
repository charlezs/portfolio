import { Heading, Text, Link, Button, Box, Stack, useDisclosure, Avatar, useColorModeValue} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function VtCard() {
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
            src={'https://media-exp1.licdn.com/dms/image/C560BAQHCoRj_BiJVAQ/company-logo_100_100/0/1564015433090?e=1672876800&v=beta&t=y9P0zexs4YYLvtIXllejRo3ljcYXmLu9FyM4exj61Uk'}
            size='2xl'
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://www.fellowship.rippleventures.com/fellowship-program' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            
            bgGradient='linear(to-l, #F4F5F6, #8C8C8C)'
            bgClip='text'
            >
              RippleX Fellowship
              </Heading>
            </Link>
            <Text
              as='em'               
              fontSize='lg'>
              Fellowship
            </Text>
            <Text
            textTransform={'uppercase'}
            color={'white'}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('grey', 'black')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              2021 - 2022
            </Text>

            <Text color={'gray.500'} pt={3} fontSize={20}>
            A remote program that connects students all across North America with a common interest of becoming better equipped as founders, VC’s, and employees at startups. It builds the skillset, knowledge, and network that otherwise are rare to acquire as a student.
            </Text>
              <Box pt={3}>
              <Button {...buttonProps}
                  width='100%'
                  h={10}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bgGradient='linear(to-r, #A0A3A3, #878787)'
                  _hover={{
                    bgGradient:'linear(to-r, #FFFFFF, #878787)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, #FFFFFF, #878787)',
                  }}
              >
                <Text color='black'>
                More About It<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4}>
              In my time as a Venture Fellow I was coached and taught the intricacies of startup building and venture capital. I was also taught how to be better equipped as an aspiring VC, Founder, and employee at future tech startups.
              </Text>
              </Box>

          </Stack>
        </Stack>                  
      </Box>      );
}