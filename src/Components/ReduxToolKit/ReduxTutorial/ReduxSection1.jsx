import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react";
import { decrement, increment, incrementByAmount, decrementByAmount } from "./counter";

const ReduxSection1 = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  return (
    <Box w="100%" h="40rem" bg="green" display={'flex'} justifyContent={'center'}>
      <Flex
        direction={"column"}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading>The count is: {count}</Heading>
        <Button mt='5' onClick={() => dispatch(increment())}>Increment</Button>
        <Button mt='5' onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button mt='5' onClick={() => dispatch(incrementByAmount(5))}>increaseBy 5</Button>
        <Button mt='5' onClick={() => dispatch(decrementByAmount(5))}>decreaseBy 5</Button>
      </Flex>
    </Box>
  );
};

export default ReduxSection1;
