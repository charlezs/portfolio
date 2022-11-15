import { Heading, Text, Link, Button, Box, Stack, useDisclosure, Avatar, useColorModeValue} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function ArCard() {
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
            borderColor: "blue.200",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Avatar
            src={'https://air.ai/images/AirSignature.svg'}
            size='2xl'
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://air.ai/' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            
            bgGradient='linear(to-l, #FBF2FF, blue.600)'
            bgClip='text'
            >
              Air.ai
              </Heading>
            </Link>
            <Text
              as='em'               
              fontSize='lg'>
              Software Engineer
            </Text>
            <Text
            textTransform={'uppercase'}
            color={'blue.600'}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('blue.200', 'blue.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              2022 - 2023
            </Text>

            <Text color={'gray.500'} pt={3} fontSize={20}>
            AI-powered suite initially focused on helping businesses scale with speed and stability that powers $100M+ in stealth.            </Text>
              <Box pt={3}>
              <Button {...buttonProps}
                  width='100%'
                  h={10}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bgGradient='linear(to-r, #FBF2FF, blue)'
                  _hover={{
                    bgGradient:'linear(to-r, #FBF2FF, blue)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, #FBF2FF, blue)',
                  }}
              >
                <Text color='black'>
                More About It<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4}>
              At Air.ai I assisted in building end-end features. I rebuilt APIs, optimized code bases, and designed beautiful front ends. I also had the role of re-building all of the software we were dependent on in-house, along with API&apos;s and dashboards.
Here I coded the frontend and backend using TypeScript, React, Next.js, TailwindCSS, Node.js, Supabase, and Axios.</Text>
              </Box>

          </Stack>
        </Stack>                  
      </Box>      );
}
