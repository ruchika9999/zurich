import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { render, screen , fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";

import Login from "../../Login";

import { Provider } from "react-redux";
import { appTest } from "../../../../_mockData_";

const store = {
  users: {
    loading: false,
  },
  authentication: {
    data: {
      email: "",
      email_verified: false,
      family_name: "",
      given_name: "",
      locale: "",
      name: "",
      picture: "",
      sub: "",
      isLoginSuccess: false,
      loginFail: {
        error: "",
        error_description: "",
        error_uri: "",
      },
    },
    loading: false,
  },
  _persist: {
    version: -1,
    rehydrated: true,
  },
};

const renderApp = (store: any) => {
  const initialState = store;
  const mockStore = configureStore();
  render(
    <GoogleOAuthProvider clientId="229004469876-6i405uh45b1nimt5sqqmk6im5rqutrgu.apps.googleusercontent.com">
      <Provider store={mockStore(initialState) as any}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
};

describe("Test Login page render", () => {

  it("render login page", async () => {
    renderApp(store);
    const heading = screen.getByText(appTest.login.heading);
    const subHeading = screen.getByText(appTest.login.name)
    const dis = screen.getByText(appTest.login.dis)
    const button = screen.getAllByText(appTest.button.login)[0]

    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(dis).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("submit login page", async () => {
    renderApp(store);
    const button = screen.getAllByText(appTest.button.login)[0] as HTMLButtonElement
    // const buttonClick = fireEvent.click(button)
    console.log('button==>',button)
  });
});
