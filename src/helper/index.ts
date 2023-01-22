import { FILTER_WITH } from "../component/util/constant";
import { User } from "../store/reducers/users/types";

export const filterUsersList = (userArr: User[] | undefined) =>
  userArr?.filter(
    (user) =>
      user.first_name.toLocaleLowerCase()[0] === FILTER_WITH.G ||
      user.last_name.toLocaleLowerCase()[0] === FILTER_WITH.W
  );
