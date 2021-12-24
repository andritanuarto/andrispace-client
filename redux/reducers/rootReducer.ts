import { combineReducers } from "redux"
import main from "./main";
import slides from "./slides";

const rootReducer = combineReducers({
  main,
  slides
})

export default rootReducer;