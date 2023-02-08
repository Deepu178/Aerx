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
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src={property.imageUrl} alt={property.imageAlt} />
  </Box>
</SimpleGrid>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {/* {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))} */}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
    
  )
}
