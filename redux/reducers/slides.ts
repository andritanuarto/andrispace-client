import { actionArgs } from "../actions/main";
import * as types from "../types";

const slides = (state = {
  initialRender: true,
  splashIndex: 0,
  heroIndex: 0,
  navigationOpen: false
}, action:actionArgs) => {
  switch(action.type) {
    default:
      return {...state};
  }
}

export default slides;