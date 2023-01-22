import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { initStore } from "./store/configureStore";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = initStore;

root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="229004469876-6i405uh45b1nimt5sqqmk6im5rqutrgu.apps.googleusercontent.com">
    <App store={store()} />
  </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
