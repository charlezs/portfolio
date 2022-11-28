
import { Heading, Text, StackDivider, Flex, Stack, useColorModeValue, Image, SimpleGrid, Icon} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
    BsFillBrightnessAltHighFill,
    BsFillPlusCircleFill,
    BsEye,
  } from 'react-icons/bs';

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

export default function IntroMe() {

return (

<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
<Stack spacing={4}>
  <Text
    textTransform={'uppercase'}
    color={'white'}
    fontWeight={600}
    fontSize={'sm'}
    bg={'#EB3C27'}
    p={2}
    alignSelf={'flex-start'}
    rounded={'md'}>
    Welcome to my Site!
  </Text>
  <Heading>I&apos;m Charles Nyabeze  III</Heading>
  <Text color={'#3B3931'} fontSize={'lg'}>
  Front-end web developer, designer of beautiful things, NFT Trader, Founder, Writer, Content Creator, and serial learner of high impact skills.</Text>
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
      iconBg={'#EB3C27'}
      text={'Founder of Agora acquired by Talent Protocol'}
    />
    <Feature
      icon={<Icon as={BsFillPlusCircleFill} color={'white'} w={5} h={5} />}
      iconBg={'#EB3C27'}
      text={'Made 12,000% returns in crypto'}
    />
    <Feature
      icon={
        <Icon as={BsEye} color={'white'} w={5} h={5} />
      }
      iconBg={'#EB3C27'}
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
 )
}