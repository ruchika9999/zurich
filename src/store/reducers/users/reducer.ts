import { Reducer } from "redux";
import { UsersType, UsersState } from "./types";

export const initialState: UsersState = {
  data : undefined, 
  errors: undefined,
  loading: false
};

const reducer: Reducer<UsersState> = (state = initialState, action) => {
  switch (action.type) {
    case UsersType.FETCH: {
      return { ...state, loading: true };
    }
    case UsersType.SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case UsersType.FAIL: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as UsersReducer };