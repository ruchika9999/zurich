import { createStore, applyMiddleware, Store } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { Persistor  } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UsersReducer } from "./reducers/users/reducer";
import { AuthenticationReducer } from "./reducers/authentication/reducer";

import rootReducer, { persistReducerData } from "./reducers/rootReducer";

interface PersistorStorage extends Store {
  __persistor?: Persistor;
}

export interface IState {
  users: ReturnType<typeof UsersReducer>;
  authentication: ReturnType<typeof AuthenticationReducer>;
}

const bindMiddleware = (middleware: [ThunkMiddleware]) => {
  return applyMiddleware(...middleware);
};

const persistConfig = {
  key: "root",
  whitelist: persistReducerData,
  storage,
};

const { persistReducer, persistStore } = require("redux-persist");

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initStore = () => {
  const store = createStore(
    persistedReducer,
    bindMiddleware([thunk])
  ) as PersistorStorage;

  store.__persistor = persistStore(store);

  return store;
};


const configureStore = initStore();

export type AppDispatch = typeof configureStore.dispatch;
export type RootState = typeof configureStore.getState;


export default initStore;
