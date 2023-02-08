import Head from "next/head";
import { extendTheme } from "@chakra-ui/react";
import theme from './_app'
import {Box, Image, Badge, SimpleGrid, Spacer, Flex} from "@chakra-ui/react";
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
    <Box w={3/12} borderWidth='1px' bg="black" color="white"  borderRadius='lg' overflow='hidden'>
      <Flex px="20">
        <Box flexBasis="1/2">Collection</Box>
        <Spacer />
        <Box flexBasis="1/2">Menu</Box>
      </Flex>
      <Box>My Collections - </Box>
      <SimpleGrid columns={2} spacing={10}>
  <Box bg='tomato' height='80px'>
    <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={property.imageUrl} alt={property.imageAlt} zIndex="0" />
    </Box>
 
  
  </Box>
  <Box bg='tomato' height='80px'>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={property.imageUrl} alt={property.imageAlt} zIndex="0" />
    </Box>
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
  <Box bg='tomato' height='80px'>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={property.imageUrl} alt={property.imageAlt} zIndex="0" />
    </Box>
  </Box>
  <Box bg='tomato' height='80px'>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={property.imageUrl} alt={property.imageAlt} zIndex="0" />
    </Box>
  </Box>
  <Box bg='tomato' height='80px'>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={property.imageUrl} alt={property.imageAlt} zIndex="0" />
    </Box>
  </Box>
  <Box bg='tomato' height='80px'>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={property.imageUrl} alt={property.imageAlt} zIndex="0" />
    </Box>
  </Box>
  <Box bg='tomato' height='80px'>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={property.imageUrl} alt={property.imageAlt} zIndex="0" />
    </Box>
  </Box>
  <Box bg='tomato' height='80px'>
  <Box>
    <Badge borderRadius='full' px='2' zIndex="100" colorScheme='blue' position="absolute">
            New
          </Badge>
    <Image src={property.imageUrl} alt={property.imageAlt} zIndex="0" />
    </Box>  
  </Box>
</SimpleGrid>
    </Box>
    
  )
}
