import { ChakraProvider } from "@chakra-ui/react";
import { Store } from "redux";
import { Provider } from "react-redux";

import { theme } from "./theme/default";
import Router from "./Router";
import { IState } from "./store/configureStore";


interface AppProps {
  store: Store<IState>;
}


const App: React.FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
