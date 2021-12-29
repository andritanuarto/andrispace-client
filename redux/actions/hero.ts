import * as types from "../types";

export type actionArgs = {
  type: string;
  payload?: number;
}

export const setHeroIndex = (heroIndex: number) => (dispatch: (arg: actionArgs) => void) => {
  dispatch({
    type: types.SET_HERO_INDEX,
    payload: heroIndex
  });
}