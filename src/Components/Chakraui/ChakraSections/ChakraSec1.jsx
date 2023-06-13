import React from 'react'
import { Box, Text, Flex, Container, HStack, VStack, Heading, Button} from '@chakra-ui/react'

const ChakraSec1 = () => {
  return (
    <Container maxW='1440px' m='auto' >
        <Box w={['80%']}
          h={['50vh']} m={[5]} 
          bg={['green']} 
          margin='auto'
          borderRadius='8rem'
          display='flex'
          justifyContent='center'
          alignItems='center'
          >
            <Text fontSize='40px'
              fontWeight={['800']}
              color='red'
              textTransform='capitalize'
              textAlign='center'>
                anything you feel like puting for chakra
            </Text>
        </Box>
        
        {/* Flexbox component  */}
        <Flex justify='space-between'>
          <Box h='100px' w='100px' bg='yellow.200' display='flex' justify='center' alignItems='center'> 
            <Text color='black'>
              Here is Box 1
            </Text>
          </Box>
          <Box h='100px' w='100px' bg='yellow.200' display='flex' justify='center' alignItems='center'> 
            <Text color='black'>
              Here is Box 2
            </Text>
          </Box>
          <Box h='100px' w='100px' bg='yellow.200' display='flex' justify='center' alignItems='center'> 
            <Text color='black'>
              Here is Box 3
            </Text>
          </Box>
          <Box h='100px' w='100px' bg='yellow.200' display='flex' justify='center' alignItems='center'> 
            <Text color='black'>
              Here is Box 4
            </Text>
          </Box>
        </Flex>

      {/* Stack component Stack, HStack, VStack */}

      <HStack>
        <Box w='20rem' h='20rem' bg='red' textAlign='center' >
          <Text>What's in here for stack</Text>
        </Box>
        <Box w='20rem' h='20rem' bg='red' textAlign='center' >
          <Text>What's in here for stack</Text>
        </Box>
        <Box w='20rem' h='20rem' bg='red' textAlign='center' >
          <Text>What's in here for stack</Text>
        </Box>
        <Box w='20rem' h='20rem' bg='red' textAlign='center' >
          <Text>What's in here for stack</Text>
        </Box>
      </HStack>  
      <VStack mt='5rem'>
        <Box w='20rem' h='20rem' bg='red' textAlign='center' >
          <Text>What's in here for stack</Text>
        </Box>
        <Box w='20rem' h='20rem' bg='red' textAlign='center' >
          <Text>What's in here for stack</Text>
        </Box>
        <Box w='20rem' h='20rem' bg='red' textAlign='center' >
          <Text>What's in here for stack</Text>
        </Box>
        <Box w='20rem' h='20rem' bg='red' textAlign='center' >
          <Text>What's in here for stack</Text>
        </Box>
      </VStack>  

      {/* Typos */}
      <Box bg='blue' color='black' textAlign='center'>
        <Text as='i'>This is a text</Text>
        <Heading as='h1'>This is and header</Heading>
        <Heading as='h2'>This is and header</Heading>
        <Heading as='h3'>This is and header</Heading>

        <Button colorScheme='yellow' _hover={{background:'red'}}
        _focus={{background:'grey', color:'pink'}}
        >
          Button with Hover
        </Button>
      </Box>

    </Container>
  )
}

export default ChakraSec1