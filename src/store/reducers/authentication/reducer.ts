import { Reducer } from "redux";
import { AuthenticationType, AuthenticationState } from "./types";

const initialProfileData = {
  email: "",
  email_verified: false,
  family_name: "",
  given_name: "",
  locale: "",
  name: "",
  picture: "",
  sub: "",
  token: undefined,
  isLoginSuccess: false,
  loginFail: {
    error: "",
    error_description: "",
    error_uri: "",
  },
};

export const initialState: AuthenticationState = {
  data: initialProfileData,
  errors: undefined,
  loading: false,
};

const reducer: Reducer<AuthenticationState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthenticationType.SUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        loading: false,
        data: { ...payload, isLoginSuccess: payload.token ? true : false },
      };
    }
    case AuthenticationType.FAIL: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: initialProfileData,
      };
    }
    case AuthenticationType.LOG_OUT: {
      return { ...state, loading: false, data: initialProfileData };
    }
    case AuthenticationType.UNSUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        loading: false,
        data: {
          ...initialProfileData,
          loginFail: { ...payload.data.loginFail },
          isLoginSuccess: false,
        },
      
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as AuthenticationReducer };
