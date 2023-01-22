import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  MenuDivider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "../Icon/logo";
import { IState } from "../../store/configureStore";
import * as action from "../../store/reducers/authentication/action";

const TopNavigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const profile = useSelector((state: IState) => state.authentication.data);
  const { removeAuthentication } = bindActionCreators(action, useDispatch());

  const logOut = () => {
    removeAuthentication();
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        as="header"
        position="fixed"
        w="100%"
        zIndex={9999}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Logo />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={profile?.picture} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Center>
                    <Avatar size={"lg"} src={profile?.picture} />
                  </Center>
                  <br />
                  <Center>
                    <p>
                      {profile?.given_name} {profile?.family_name}
                    </p>
                  </Center>
                  <MenuDivider />
                  <MenuItem onClick={logOut}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default TopNavigation;
