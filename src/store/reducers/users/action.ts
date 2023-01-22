import { Action, Dispatch } from "redux";

import { DEFAULT_CALL } from "../../../component/util/constant";
import { UserApi } from "../../../api/users";
import { UsersType } from "./types";

export const fetchRequest = () => {
  return async (dispatch: Dispatch): Promise<Action> => {
    dispatch({
      type: UsersType.FETCH,
    });
    try {
      const users = new UserApi();
      const firstUserList = await users.getUsers(DEFAULT_CALL);
      const {
        data: { total_pages, data: firstUsersSet, ...rest },
      } = firstUserList;

      const totalPages = Array.from(Array(total_pages - DEFAULT_CALL).keys());

      const userData = await Promise.all(
        totalPages.map(async (page) => {
          return await users.getUsers(page + 2);
        })
      );

      const sanitizedUsers = userData
        .map((user) => {
          return user?.data?.data;
        })
        .flat();

      return dispatch({
        type: UsersType.SUCCESS,
        payload: {
          data: [...firstUsersSet, ...sanitizedUsers],
          total_pages,
          rest,
        },
      });
    } catch (e) {
      return dispatch({
        type: UsersType.FAIL,
      });
    }
  };
};
