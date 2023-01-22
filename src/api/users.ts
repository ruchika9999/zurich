import axios, { AxiosResponse } from "axios";
import { Users } from "../store/reducers/users/types";

export class UserApi {

  getUsers(page : number | undefined): Promise<AxiosResponse<Users>> {
    return axios.get<Users>(`https://reqres.in/api/users?page=${page}`);
  }
}
