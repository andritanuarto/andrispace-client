import * as types from "../types";

export type actionArgs = {
  type: string;
  payload?: string;
}

export const setInfo = (name: string) => (dispatch: (arg: actionArgs) => void) => {
  dispatch({
    type: types.SET_NAME,
    payload: name
  });
}