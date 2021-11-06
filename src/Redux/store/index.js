import { reducers } from "../reducers/combineReducers";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

///SubScribe
store.subscribe(() => console.log("store", store.getState()));
