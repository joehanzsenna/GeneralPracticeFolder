import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CheckIcon } from "../icons/Icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22" h="22" />
      <Text>{children}</Text>
    </HStack>
  );
};

const ChakraPraciceSec2 = () => {
  return (
    <Box px={"24px"}>
      <Box
        maxW="994px"
        m="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="2xl"
      >
        <Flex flexDirection={{ base: "column", md: "row", lg: "row" }}>
          <Box bg="#F0EAFB" p="60px" textAlign="center">
            <Text fontSize="24px" fpntWeight="800">
              Premium Pro
            </Text>
            <Heading as="h3" fontSize="60px" mt="16px">
              $392
            </Heading>
            <Text
              color="#171923"
              fontSize="18px"
              fontWeight="500"
              mt="24px"
              mx="auto"
            >
              Billed just once
            </Text>
            <Button
              colorScheme="purple"
              ml
              size={{ base: "md", md: "lg" }}
              w={{base:'200px', md:'282px'}}
              mt="24px"
              mx='auto'
            >
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="18px" bg="white">
            <Text>
              Access these features when you get this pricing package business.
            </Text>
            <Stack
              as="ul"
              spacing="20px"
              pt="24px"
              fontSize={{ base: "16px", md: "18px", lg: "18px" }}
            >
              <ListItem>International calling and Messaging Api</ListItem>
              <ListItem>International calling and Messaging Api</ListItem>
              <ListItem>International calling and Messaging Api</ListItem>
              <ListItem>International calling and Messaging Api</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ChakraPraciceSec2;
