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
    <Box bg={"black"} height={2000} marginTop={0}>
    <Box w={259} borderWidth='1px' borderRadius={15} bg="black" color="white"  overflow='hidden' h="652" marginLeft={1157} marginTop={24} className="rounded-3xl" paddingX={8} paddingY={16}>
      <Flex marginX={"auto"} marginTop={1} fontSize={14} fontFamily={"sans-serif"} paddingX={10}>
        
        <Box flexBasis="1/2" fontSize={14}>
        <Box className="-rotate-[22deg]" position={"absolute"}>
          <Box background={"rgba(255, 255, 255, 0.4)"} width={18} height={17} marginTop={3} marginLeft={2} position={"absolute"} className="skew-y-[20deg] skew-x-[45deg]" rounded={2} zIndex={3}></Box>
          <Box background={"#FFC93F"} width={18} height={18} position={"absolute"} marginTop={7} marginLeft={2} className="skew-x-[45deg] skew-y-[20deg]" zIndex={2} rounded={2}></Box>
          <Box background={"#EDAF10"} width={18} height={18} position={"absolute"} marginTop={11} marginLeft={2}  className="skew-x-[45deg] skew-y-[20deg]" zIndex={1} rounded={2}></Box>
          </Box>
          <Box marginLeft={56}>Collection</Box>
          </Box>
        <Spacer />
        <Box flexBasis="1/2" fontSize={14}>
          <Icon as={EllipsisVerticalIcon} fontWeight="bold" fontSize={20} />
        </Box>
      </Flex>
      <Flex h={32} w={235} className="rounded-xl" bg={"rgba(255, 255, 255, 0.05)"} paddingX={10} marginTop={10} marginBottom={10} marginX={"auto"} paddingTop={5}>
       
          <Box color={"white"} fontSize={12} marginLeft={12}>My Collections</Box>
        <Spacer />
        <Box>
          <Icon as={ChevronRightIcon} marginBottom={4} />
        </Box>
      </Flex>
      <SimpleGrid columns={2} spacing={12}>
  <Box h={146} w={111}
  borderRadius={10}
  bgImage="url('https://s3-alpha-sig.figma.com/img/9929/a468/00aae90e0a56a6f7a8fed770ad392db4?Expires=1676851200&Signature=lxifHV-0ndNBfigN8Yo~Ogbwap5dsW2MRhC8cacHgs4boGIhRXlPoAOj8jOhqkHybttt2p~jAIsdRslfJkSwdBc3rj7ws9rgBj5x7RmQPrXRZsn~I7JuiJ4t3EDvD4I8tJ3bWQaC8g60HIvafFvma~nsRYfxEMUE5CseOFXyCAJanXyIjgEx-6ntRYmcpHLS3coWe6f-LWQNS9WYiDVAcELx3rlcF619SJBScmhHLKIi1YGwQQ218NCas69xWDHpy01YtcsCCGrjj2MSHo9hLmNby~N6X6siN66v5lW~nlEWtdGr8~JR9TbPnBjf0YeO5npRefqXl76fPkKiDHFjMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  bgPosition="center"
  bgRepeat="no-repeat"
  backgroundSize={"100% 100%"}
  className="hover:scale-110"
  >
  
    <Badge borderRadius='full' background={"rgba(255, 255, 255, 0.15)"}  className="rounded-3xl backdrop-blur-lg" px='12' py="3" zIndex="100" colorScheme='blue' position="absolute" ml="10" mt="105">
            12,03 AEX
          </Badge>
    {/* <Image src={First} alt={property.imageAlt} className="h-36 w-28 rounded-lg"/> */}
 
  
  </Box>
  {/* <Box height={146} width={111}> */}
  <Box height={146} width={111} 
  borderRadius={10}
  bgImage="url('https://s3-alpha-sig.figma.com/img/b455/abb6/b1287d2ad774055743bae872e895b264?Expires=1676851200&Signature=f6nqcNUTW049uxk~bc-BEEJS-LZBHYLfUD-m3B~4bbyM6rCXSF18OlAZ3wlYgFciR29Jjv1ckN5ZrwAsuFPk5q0lD2u-BW2yzUB6xXMKe1JckkxAl9VS8vlFn0Um6a2yaOaTdT4ZMDIbkHQLf2aVFGxT88OvCBQvVgTz~i9oqsLmofpvMyCJAhrjpPlgt5yRvh8C2smbGfTAqSWSt9HvTlnVpeUDPLzRdLcIVs4pYelYU~~wmm5brG~qGe6hpHvwHX2tdoVRaZukbynq67kEgbxe~vsvUQ0i2gifqdNIg9labSoKpiAkRloJP5Xmcko7TdZa2zV1lGp3o3ZA3YK37w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  bgPosition="center"
  bgRepeat="no-repeat"
  backgroundSize={"100% 100%"}
  className="hover:scale-110"
  >
    
  <Badge borderRadius='full' bg={"rgba(255, 255, 255, 0.15)"} className="rounded-3xl backdrop-blur-lg" px='12' py="3" zIndex="100" colorScheme='blue' position="absolute" ml="10" mt="105">
            12,03 AEX
          </Badge>
    
    {/* <Image src={Second} alt={property.imageAlt} zIndex="0"  className="h-36 w-28 rounded-lg" /> */}
    </Box>
  {/* </Box> */}
  {/* <Box height={146} width={111}> */}
  <Box height={146} width={111}
  borderRadius={10}
  bgImage="url('https://s3-alpha-sig.figma.com/img/a5d8/dd40/e035e0bba1495af74d681d5f7e6a3fdf?Expires=1676851200&Signature=NvO6c-OLPLg2UfK6rlJS6T8KBOCZE27Qw1ctqynlzDw0WX3zr7l5NmcBR5nDLKvErTpg7q8zDFg6LPqVsiiLgKsKwa1MF5yH~XFK7pyveJQDKEJ13aNFouQSScUjH6icmdkowtjT8n10lhW3GIRInsTMOZdcGBlMSvPS7KkY6cO-rbEadCAqUk-IGTxzd2RRqzZP8f0TQP3mhjVQbQLfEHQ3hwM7IQgFK9ZFKZQrQbGDNxhfpS6Oe0e-qQeXDNALH2jBq5X6Du6fPwslqI0GlvWK2gZtiQbdcZkLJPOMcf5Cnl2S2rZQw1ItEI42HlzAbkX3ZspoWaXPboW7inCfdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  bgPosition="center"
  bgRepeat="no-repeat"
  backgroundSize={"100% 100%"}
  className="hover:scale-110"
  >
  <Badge borderRadius='full' bg={"rgba(255, 255, 255, 0.15)"} className="rounded-3xl backdrop-blur-lg" px='12' py="3" zIndex="100" colorScheme='blue' position="absolute" ml="10" mt="105">
            12,03 AEX
          </Badge>
    {/* <Image src={Third} alt={property.imageAlt} zIndex="0"  className="h-36 w-28 rounded-lg"/> */}
    </Box>
  {/* </Box> */}
  {/* <Box height={146} width={111}> */}
  <Box height={146} width={111}
  bgImage="url('https://s3-alpha-sig.figma.com/img/7989/c239/fde0f313cfbfc80a1ce99b8d6e4c45eb?Expires=1676851200&Signature=oAbn1PHaOhGV~h1BdDM8WLFLoRkvh4Mn4rvpw763QB9zBh29nxjtp8IK2LK9TthdLov4SXS9BN1TxdzT70aUMyvN8EmDMIJHZyUL6S8eIuLzX3ecAmo79ztDPLUi2KZAdrjUuyk~4VeDcDpH1MtECO4HNfwF7iZvFZaGpuvAosVZcF9QbJva5Aq4rtW2wI92O0~6Pnbox4U7xoSPmoqKPUPLs9vgwg-0akAF7nP2HrDRq0kEabjrfBD0bR3OKAqaLGuJUQSyCzcpeIT82un8oFc8hnsGJYzmweD~tBmz0OV53NzkEnOF~qCcckcdDfo~ybCzXTpFQVcC0uQ5xw7stw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  bgPosition="center"
  bgRepeat="no-repeat"
  backgroundSize={"100% 100%"}
  borderRadius={10}
  className="hover:scale-110"
  >
  <Badge borderRadius='full' bg={"rgba(255, 255, 255, 0.15)"} className="rounded-3xl backdrop-blur-lg" px='12' py="3" zIndex="100" colorScheme='blue' position="absolute" ml="10" mt="105">
            12,03 AEX
          </Badge>
    {/* <Image src={Fourth} alt={property.imageAlt} zIndex="0"   className="h-36 w-28 rounded-lg" /> */}
    </Box>
  {/* </Box> */}
  {/* <Box height={146} width={111}> */}
  <Box  height={146} width={111}
  borderRadius={10}
  bgImage="url('https://s3-alpha-sig.figma.com/img/9929/a468/00aae90e0a56a6f7a8fed770ad392db4?Expires=1676851200&Signature=lxifHV-0ndNBfigN8Yo~Ogbwap5dsW2MRhC8cacHgs4boGIhRXlPoAOj8jOhqkHybttt2p~jAIsdRslfJkSwdBc3rj7ws9rgBj5x7RmQPrXRZsn~I7JuiJ4t3EDvD4I8tJ3bWQaC8g60HIvafFvma~nsRYfxEMUE5CseOFXyCAJanXyIjgEx-6ntRYmcpHLS3coWe6f-LWQNS9WYiDVAcELx3rlcF619SJBScmhHLKIi1YGwQQ218NCas69xWDHpy01YtcsCCGrjj2MSHo9hLmNby~N6X6siN66v5lW~nlEWtdGr8~JR9TbPnBjf0YeO5npRefqXl76fPkKiDHFjMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  bgPosition="center"
  bgRepeat="no-repeat"
  backgroundSize={"100% 100%"}
  className="hover:scale-110"
  >
  <Badge borderRadius='full' bg={"rgba(255, 255, 255, 0.15)"} className="rounded-3xl backdrop-blur-lg" px='12' py="3" zIndex="100" colorScheme='blue' position="absolute" ml="10" mt="105">
            12,03 AEX
          </Badge>
    <Image src={First} alt={property.imageAlt} zIndex="0"   className="h-36 w-28 rounded-lg" />
    </Box>
  {/* </Box> */}
  {/* <Box height={146} width={111}> */}
  <Box height={146} width={111}
  borderRadius={10}
  bgImage="url('https://s3-alpha-sig.figma.com/img/b455/abb6/b1287d2ad774055743bae872e895b264?Expires=1676851200&Signature=f6nqcNUTW049uxk~bc-BEEJS-LZBHYLfUD-m3B~4bbyM6rCXSF18OlAZ3wlYgFciR29Jjv1ckN5ZrwAsuFPk5q0lD2u-BW2yzUB6xXMKe1JckkxAl9VS8vlFn0Um6a2yaOaTdT4ZMDIbkHQLf2aVFGxT88OvCBQvVgTz~i9oqsLmofpvMyCJAhrjpPlgt5yRvh8C2smbGfTAqSWSt9HvTlnVpeUDPLzRdLcIVs4pYelYU~~wmm5brG~qGe6hpHvwHX2tdoVRaZukbynq67kEgbxe~vsvUQ0i2gifqdNIg9labSoKpiAkRloJP5Xmcko7TdZa2zV1lGp3o3ZA3YK37w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  bgPosition="center"
  bgRepeat="no-repeat"
  backgroundSize={"100% 100%"}
  className="hover:scale-110"
  >
  <Badge borderRadius='full' bg={"rgba(255, 255, 255, 0.15)"} className="rounded-3xl backdrop-blur-lg" px='12' py="3" zIndex="100" colorScheme='blue' position="absolute" ml="10" mt="105">
            12,03 AEX
          </Badge>
    {/* <Image src={Second} alt={property.imageAlt} zIndex="0"   className="h-36 w-28 rounded-lg" /> */}
    </Box>
  {/* </Box> */}
  {/* <Box width={111} height={146}> */}
  <Box height={146} width={111}
  borderRadius={10}
  bgImage="url('https://s3-alpha-sig.figma.com/img/a5d8/dd40/e035e0bba1495af74d681d5f7e6a3fdf?Expires=1676851200&Signature=NvO6c-OLPLg2UfK6rlJS6T8KBOCZE27Qw1ctqynlzDw0WX3zr7l5NmcBR5nDLKvErTpg7q8zDFg6LPqVsiiLgKsKwa1MF5yH~XFK7pyveJQDKEJ13aNFouQSScUjH6icmdkowtjT8n10lhW3GIRInsTMOZdcGBlMSvPS7KkY6cO-rbEadCAqUk-IGTxzd2RRqzZP8f0TQP3mhjVQbQLfEHQ3hwM7IQgFK9ZFKZQrQbGDNxhfpS6Oe0e-qQeXDNALH2jBq5X6Du6fPwslqI0GlvWK2gZtiQbdcZkLJPOMcf5Cnl2S2rZQw1ItEI42HlzAbkX3ZspoWaXPboW7inCfdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  bgPosition="center"
  bgRepeat="no-repeat"
  backgroundSize={"100% 100%"}
  className="hover:scale-110"
  >
    
    {/* <Image src={Third} alt={property.imageAlt} zIndex="0"   className="h-36 w-28 rounded-lg" /> */}
    {/* </Box> */}
  </Box>
  {/* <Box width={111} height={146}> */}
  <Box
  borderRadius={10}
  bgImage="url('https://s3-alpha-sig.figma.com/img/7989/c239/fde0f313cfbfc80a1ce99b8d6e4c45eb?Expires=1676851200&Signature=oAbn1PHaOhGV~h1BdDM8WLFLoRkvh4Mn4rvpw763QB9zBh29nxjtp8IK2LK9TthdLov4SXS9BN1TxdzT70aUMyvN8EmDMIJHZyUL6S8eIuLzX3ecAmo79ztDPLUi2KZAdrjUuyk~4VeDcDpH1MtECO4HNfwF7iZvFZaGpuvAosVZcF9QbJva5Aq4rtW2wI92O0~6Pnbox4U7xoSPmoqKPUPLs9vgwg-0akAF7nP2HrDRq0kEabjrfBD0bR3OKAqaLGuJUQSyCzcpeIT82un8oFc8hnsGJYzmweD~tBmz0OV53NzkEnOF~qCcckcdDfo~ybCzXTpFQVcC0uQ5xw7stw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
  bgPosition="center"
  bgRepeat="no-repeat"
  backgroundSize={"100% 100%"}
  className="hover:scale-110"
  >

    {/* <Image src={Fourth} alt={property.imageAlt} zIndex="0"   className="h-36 w-28 rounded-lg" /> */}
    </Box>  
  {/* </Box> */}
</SimpleGrid>
{/* <Image src={SecondImg} /> */}
    </Box>
    </Box>
  )
}
