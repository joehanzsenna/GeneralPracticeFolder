import React from 'react'
import { Box, HStack, Icon, Text, StackProps, Stack } from '@chakra-ui/react'
import { CheckIcon } from '../icons/Icons';

export const ListItem = (props:StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack {...rest}>
            <Icon as={CheckIcon} w='22' h='22' />
            <Text>
                (children)
            </Text>
        </HStack>
    )
}

const ChakraSec2 = () => {
  return (
    <Box maxW='1440px' m='auto' w='100%' h='50rem' bg='green' >
        <Stack spacing={25}>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing</ListItem>
        </Stack>
    </Box>
  )
}

export default ChakraSec2