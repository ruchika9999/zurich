import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Box, Spinner } from "@chakra-ui/react";

import { filterUsersList } from "./../../../helper";
import ListItem from "./../../List";

import * as action from "../../../store/reducers/users/action";
import { IState } from "../../../store/configureStore";
import { User } from "../../../store/reducers/users/types";

const Home = () => {
  const { fetchRequest } = bindActionCreators(action, useDispatch());
  const { data: users, loading } = useSelector((state: IState) => state.users);

  React.useEffect(() => {
    fetchRequest();
    //React StrictMode calls all Effects twice to make sure their
    //cleanup/unmount handlers work as intended. You may need to change
    //your effects accordingly, even if they have an empty dependency list
    //and would normally not unmount before the site is closed.
    //but its only happened in development mode
  }, []);

  return (
    <Box position={"relative"} minHeight={"100vh"}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="100%"
        paddingTop={20}
        paddingBottom={20}
      >
        {loading && <Spinner />}
        {filterUsersList(users?.data)?.map((user: User) => (
          <ListItem {...user} key={user?.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
