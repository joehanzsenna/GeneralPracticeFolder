import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ChakraPraciceSec1 = () => {
  return (
    <Box mb="112px" as="section">
      <Box
        color="#F7FAFC"
        bg="#6846C1"
        pt="90px"
        pb="198px"
        px="32px"
        textAlign="center"
      >
        <Heading fontWeight="800" fontSize={{base:'35px', md:'48px'}} textAlign={{base:'left', md:'left', lg:'center'}}>
          Simply pricing your business
        </Heading>
        <Text fontWeight="500" fontSize={{base:'16px', md:'24px'}} pt="16px" textAlign={{base:'left', md:'left', lg:'center'}}>
          Plans that are currently crafted to suit your business
        </Text>
      </Box>
    </Box>
  );
};

export default ChakraPraciceSec1;
