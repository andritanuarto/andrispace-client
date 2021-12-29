import { reducerTypes } from "../types";

export type actionArgs = {
  type: string;
  payload?: any;
}

export const setHeroIndex = (heroIndex: number) => (dispatch: (arg: actionArgs) => void) => {
  dispatch({
    type: reducerTypes.SET_HERO_INDEX,
    payload: heroIndex
  });
}

export const setAutoPlay = (isOn: boolean) => (dispatch: (arg: actionArgs) => void) => {
  dispatch({
    type: reducerTypes.SET_HERO_AUTOPLAY,
    payload: isOn
  });
}