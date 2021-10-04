import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import useStore from "../../store/store";

const Logo = () => {
  const theme = useStore((state) => state.theme);

  return (
    <HStack visibility="hidden">
      <Flex
        bgGradient="linear(to-b, teal.300, teal.500)"
        w="36px"
        h="36px"
        rounded="md"
        spacing="0"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          gridTemplateRows="repeat(2, 1fr)"
        >
          <Box
            border="1px solid white"
            width="10px"
            height="10px"
            borderRight="none"
            borderBottom="none"
          ></Box>
          <Box
            border="1px solid white"
            width="10px"
            height="10px"
            borderBottom="none"
          ></Box>
          <Box
            border="1px solid white"
            width="10px"
            height="10px"
            borderRight="none"
          ></Box>
          <Box border="1px solid white" width="10px" height="10px"></Box>
        </Grid>
      </Flex>
      <Text
        color={theme === "light" ? "gray.700" : "white"}
        fontSize="2xl"
        as="h1"
        fontWeight="bold"
      >
        sudo
      </Text>
    </HStack>
  );
};

export default Logo;
