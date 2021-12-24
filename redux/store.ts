import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const makeStore = () => createStore(rootReducer, enhancer);

export const wrapper = createWrapper(makeStore);