import axios, { AxiosResponse } from "axios";
import { UserProfile } from "../store/reducers/authentication/types";

export class GoogleAuth {

  getGooglAuthentication( accessToken : string ): Promise<AxiosResponse<UserProfile>> {
    return axios.get<UserProfile>('https://www.googleapis.com/oauth2/v3/userinfo',{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  }
}
