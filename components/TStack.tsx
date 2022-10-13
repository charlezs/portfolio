import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'}>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>

    
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
        bgClip={'text'}
        bgGradient={[
          'linear(to-t, whiteAlpha.700, blue.400)',
        ]}        >
        My Weapons of Choice Are:
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Styling'} stat={'ChakraUI'} />
        <StatsCard title={'ORM'} stat={'Prisma'} />
        <StatsCard title={'Database'} stat={'MongoDB'} />
        <StatsCard title={'Weapon of Choice'} stat={'TypeScript'} />
        <StatsCard title={'Framework'} stat={'Next.Js'} />
        <StatsCard title={'Functionality'} stat={'JQuery'} />
        <StatsCard title={'UI'} stat={'React'} />
        <StatsCard title={'Management'} stat={'MySQL'} />
      </SimpleGrid>
    </Box>

  );
}