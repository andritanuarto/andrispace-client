import { reducerTypes } from "../types";

export type actionArgs<T> = {
  type: reducerTypes;
  payload?: T;
}

export const setHeroIndex = (heroIndex: number) => (dispatch: (arg: actionArgs<number>) => void) => {
  dispatch({
    type: reducerTypes.SET_HERO_INDEX,
    payload: heroIndex
  });
}

export const setAutoPlay = (isOn: boolean) => (dispatch: (arg: actionArgs<boolean>) => void) => {
  dispatch({
    type: reducerTypes.SET_HERO_AUTOPLAY,
    payload: isOn
  });
}