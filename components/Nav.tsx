import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from "next/link"
import {BsFillHouseDoorFill} from 'react-icons/bs'
import { Icon } from '@chakra-ui/react'
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box w='5%' pl={10} pt={1}>
                    <NextLink href='/' passHref>
                        <Link><Icon w={5} h={5} as={BsFillHouseDoorFill} /></Link>
                    </NextLink>
                    </Box>

                    <Box>
                    <NextLink href='/about' passHref>
                        <Link>About Me</Link>
                    </NextLink>
                    </Box>

                    <Box>
                    <NextLink href='/projects' passHref>
                        <Link>My Projects</Link>
                    </NextLink>
                    </Box>

                    <Box>
                    <NextLink href='/writing' passHref>
                        <Link>Writing</Link>
                    </NextLink>
                    </Box>

                    <Box>
                    <NextLink href='/contact' passHref>
                        <Link>Contact Me</Link>
                    </NextLink>
                </Box>


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}