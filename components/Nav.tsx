import { ReactNode } from 'react';
import {
  Box,
  Icon,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from "next/link"
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {BsFillHouseDoorFill} from 'react-icons/bs'

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box textColor='white' bg={'black'} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color='white'
          />
          <HStack pl={6} spacing={100} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={60}
              display={{ base: 'none', md: 'flex' }}>
                    <NextLink href='/' passHref>
                    <Link><Icon w={5} h={5} color='white' as={BsFillHouseDoorFill} /></Link>
                    </NextLink>
                    <NextLink href='/about' passHref>
                        <Link>About</Link>
                    </NextLink>
                    <NextLink href='/projects' passHref>
                        <Link>Projects</Link>
                    </NextLink>
                    <NextLink href='/writing' passHref>
                        <Link>Writing</Link>
                    </NextLink>
                    <NextLink href='/contact' passHref>
                        <Link>Contact</Link>
                    </NextLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode} bg={useColorModeValue('black', 'black')}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} color='white'>
            <Stack as={'nav'} spacing={4} textColor='white'>
            <NextLink href='/' passHref>
                    <Link>Home</Link>
                    </NextLink>
                    <NextLink href='/about' passHref>
                        <Link>About</Link>
                    </NextLink>
                    <NextLink href='/projects' passHref>
                        <Link>Projects</Link>
                    </NextLink>
                    <NextLink href='/writing' passHref>
                        <Link>Writing</Link>
                    </NextLink>
                    <NextLink href='/contact' passHref>
                        <Link>Contact</Link>
                    </NextLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}