import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  BsFillBrightnessAltHighFill,
  BsFillPlusCircleFill,
  BsEye,
} from 'react-icons/bs';
import { ReactElement } from 'react';
import TStack from '../components/TStack';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Welcome to my Site!
          </Text>
          <Heading>I'm Charles Nyabeze  III</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Full stack web developer, VC, NFT Trader, Founder, Writer, Content Creator, and serial learner of high impact skills.            </Text>
          <Stack
            spacing={6}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={BsFillBrightnessAltHighFill} color={'white'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.300', 'purple.500')}
              text={'Founder of Agora (acquired by [REDACTED])'}
            />
            <Feature
              icon={<Icon as={BsFillPlusCircleFill} color={'white'} w={5} h={5} />}
              iconBg={useColorModeValue('green.300', 'green.500')}
              text={'Made 12,000% returns in crypto'}
            />
            <Feature
              icon={
                <Icon as={BsEye} color={'white'} w={5} h={5} />
              }
              iconBg={useColorModeValue('blue.300', 'blue.500')}
              text={'Founder of Inner Circle'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://cdn.discordapp.com/attachments/985521628500877322/1024485843689279538/305DC2AD-FB2B-4E92-8984-4E1B8D23E39F_2.JPG'
            }
            objectFit={'cover'}
          />

        </Flex>
      </SimpleGrid>
      <TStack />
      
    </Container>

    
  );
}

