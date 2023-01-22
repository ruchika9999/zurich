import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      as="footer"
      position="fixed"
      w="100%"
      zIndex={9999}
      bottom="0"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
        </Stack>
        <Text>
          © <a href="https://www.zurich.com/en">www.zurich.com.</a> All rights
          reserved
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
