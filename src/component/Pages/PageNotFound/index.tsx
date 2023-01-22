import { useEffect, useState } from "react";
import { Box, Button, Container, Heading, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux/es/exports";

import { IState } from "../../../store/configureStore";
import { BACK_BUTTON_NAME, ROUTE } from "../../util/constant";
import { useNavigate } from "react-router-dom";

export const BadRoute = () => {
  const [ buttonStatus , setButtonName ] = useState({ name : BACK_BUTTON_NAME.BACK_TO_HOME ,  route : ROUTE.HOME })  
  const profile = useSelector((state: IState) => state.authentication.data);
  const navigator =useNavigate();



  useEffect(()=>{
    if(profile?.isLoginSuccess){
      setButtonName(state => ({ ...state , name : BACK_BUTTON_NAME.BACK_TO_HOME , route : ROUTE.HOME }))
    }else{
      setButtonName(state => ({ ...state , name : BACK_BUTTON_NAME.BACK_TO_LOGIN , route : ROUTE.LOGIN }))
    }
  },[profile?.isLoginSuccess])

  const goBack = () => {
    navigator(buttonStatus.route)
  }


  return (
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
          Bad Route <br />
        </Heading>

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
            onClick={() => goBack()}
            _hover={{
              bg: "blue.300",
            }}
          >
            {buttonStatus.name}
          </Button>
          ;
        </Stack>
      </Stack>
    </Container>
  );
};
