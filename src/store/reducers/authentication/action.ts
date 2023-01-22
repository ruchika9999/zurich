import { Dispatch } from "redux";

import { GoogleAuth } from "../../../api/authentication";
import { ROUTE } from "../../../component/util/constant";
import { AuthenticationType, GoogleResponseSuccess , GoogleResponseFail } from "./types";

export const setAuthenticationSuccess = (authData: GoogleResponseSuccess) => {
  const { navigate, response } = authData;

  return async (dispatch: Dispatch) => {
    try {
      const authentication = new GoogleAuth();

      const userResponse = await authentication.getGooglAuthentication(
        response.access_token
      );

      const authData = { ...userResponse?.data, token: response.access_token };
      navigate(ROUTE.HOME);
      return dispatch({
        type: AuthenticationType.SUCCESS,
        payload: authData,
      });
    } catch (error) {
      return (dispatch: Dispatch) => {
        return dispatch({
          type: AuthenticationType.FAIL,
          payload: error,
        });
      };
    }
  };
};

export const setAuthenticationFailed = (error : GoogleResponseFail) => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: AuthenticationType.UNSUCCESS,
      data : error
    });
  };
};

export const removeAuthentication = () => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: AuthenticationType.LOG_OUT,
    });
  };
};
