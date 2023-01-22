import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import random from "random";

import {filterUsersList } from './../../../helper'
import ListItem from "./../../List";
import { Box, Spinner } from "@chakra-ui/react";
import * as action from "../../../store/reducers/users/action";
import { IState } from "../../../store/configureStore";
import { User } from "../../../store/reducers/users/types";

const Home = () => {
  const { fetchRequest } = bindActionCreators(action, useDispatch());
  const { data: users, loading } = useSelector((state: IState) => state.users);
  const normal = random.normal();


  React.useEffect(() => {
    fetchRequest();
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
          <ListItem {...user} key={normal()} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
