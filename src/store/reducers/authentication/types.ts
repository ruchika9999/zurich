import { TokenResponse } from "@react-oauth/google";

export enum AuthenticationType {
  SUCCESS = "SET_AUTHENTICATION_SUCCESS",
  FAIL = "SET_AUTHENTICATION_FAIL",
  LOG_OUT = "LOG_OUT",
  UNSUCCESS = "SET_AUTHENTICATION_UNSUCCESS",
}

export interface Authentication {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
  token: string | undefined;
  isLoginSuccess: boolean;
  loginFail: {
    error: string;
    error_description: string;
    error_uri: string;
  };
}

export type UserProfile = {
  data: Authentication;
};

export type GoogleResponseSuccess = {
  response: {
    access_token: string;
  };
  navigate: (route: string) => void;
};

export type GoogleResponseFail = Pick<
  TokenResponse,
  "error" | "error_description" | "error_uri"
>;

export interface AuthenticationState {
  readonly loading: boolean;
  readonly data: Authentication | undefined;
  readonly errors?: string;
}
