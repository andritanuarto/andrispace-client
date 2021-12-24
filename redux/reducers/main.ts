import { actionArgs } from "../actions/main";
import * as types from "../types";

const main = (state = {
    name: "guest",
}, action: actionArgs) => {
  switch(action.type){
    case types.SET_NAME:
      return { 
        ...state,
        name: action.payload
      };
    default:
      return {...state};
    }
}

export default main;