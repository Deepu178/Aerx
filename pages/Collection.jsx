import Head from "next/head";
import { Icon } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Image from "next/image";
import theme from './_app'
import {Box, Badge, SimpleGrid, Spacer, Flex} from "@chakra-ui/react";
import { First, Second, Third, Fourth } from "../Assets/index.jsx";
import {AcademicCapIcon, EllipsisVerticalIcon,ChevronRightIcon} from '@heroicons/react/24/solid';
const property = {
  imageUrl: 'https://bit.ly/2Z4KKcF',
  imageAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: 'Modern home in city center in the heart of historic Los Angeles',
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4,
}

export default function Collection() {
  return (
    <Box w={259} borderWidth='1px' bg="black" color="white"  borderRadius='lg' overflow='hidden' marginY={24} h="652" marginLeft={1157} marginTop={24} className="rounded-3xl" paddingX={8} paddingY={16}>
      <Flex px="20" marginTop={21}>
        <Box flexBasis="1/2">Collection</Box>
        <Spacer />
        <Box flexBasis="1/2">
          <Icon as={EllipsisVerticalIcon} />
        </Box>
      </Flex>
      <Flex h={32} w={235} className="rounded-xl" bg="blue" paddingX={10}>
        <Box>My Collections</Box>
        <Spacer />
        <Box>
          <Icon as={ChevronRightIcon} />
        </Box>
      </Flex>
      <SimpleGrid columns={2} spacing={10}>
  <Box height={146} width={111}>
    <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={First} alt={property.imageAlt} width={111} height={146}/>
    </Box>
 
  
  </Box>
  <Box bg='tomato' height={146} width={111}>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={Second} alt={property.imageAlt} zIndex="0" w="12" h="12" />
    </Box>
  </Box>
  <Box bg='tomato' height={146} width={111}>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={Third} alt={property.imageAlt} zIndex="0" w="12" h="12"/>
    </Box>
  </Box>
  <Box bg='tomato' height={146} width={111}>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={Fourth} alt={property.imageAlt} zIndex="0" w="12" h="12"/>
    </Box>
  </Box>
  <Box bg='tomato' height={146} width={111}>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={First} alt={property.imageAlt} zIndex="0" w="12" h="12"/>
    </Box>
  </Box>
  <Box bg='tomato' height={146} width={111}>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={Second} alt={property.imageAlt} zIndex="0" w="12" h="12"/>
    </Box>
  </Box>
  <Box bg='tomato' width={111} height={146}>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={Third} alt={property.imageAlt} zIndex="0" w="12" h="12"/>
    </Box>
  </Box>
  <Box bg='tomato' width={111} height={146}>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={Fourth} alt={property.imageAlt} zIndex="0" w="12" h="12"/>
    </Box>  
  </Box>
</SimpleGrid>
{/* <Image src={SecondImg} /> */}
    </Box>
    
  )
}
