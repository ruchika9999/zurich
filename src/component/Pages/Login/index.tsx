import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

import * as action from "../../../store/reducers/authentication/action";

const Login = () => {
  const { setAuthenticationSuccess, setAuthenticationFailed } =
    bindActionCreators(action, useDispatch());
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (response) => setAuthenticationSuccess({ response, navigate }),
    onError: (error) => setAuthenticationFailed(error),
  });
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={300}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"100%"}
          >
            Meeting the CIO and Digital <br />
          </Heading>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"10%"}
          >
            <Text as={"span"} color="brand.100">
              Architect of Zurich APAC
            </Text>
          </Heading>
          <Text color={"gray.700"}>
            The report you need to read to understand the risk landscape in 2023
            and beyond.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              bg={"brand.100"}
              color={"#FFF"}
              rounded={"full"}
              px={6}
              onClick={() => login()}
              _hover={{
                bg: "blue.300",
              }}
            >
              Login With Google
            </Button>
            ;
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Login;
