import {
  Box,
  Flex,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { User } from "../../store/reducers/users/types";

const ListItem: React.FC<User> = (props) => {
  const { avatar, first_name, last_name, email  } = props;

  return (
    <Flex marginTop={2} marginBottom={1}>
      <Box
        width={"340px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={2}
        pb={7}
        pl={4}
        overflow={"hidden"}
      >
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={avatar} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>
              {first_name} {last_name}
            </Text>
            <Text color={"gray.500"}>{email}</Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default ListItem;
