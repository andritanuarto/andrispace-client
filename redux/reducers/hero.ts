import { actionArgs } from "../actions/main";

export type Slide = {
  title: string,
  subTitle: string,
  img: string,
  link: string
};

export type SlidesStateType = {
  slides: Array<Slide>;
  autoPlay: boolean;
  initialRender: boolean;
  splashIndex: number;
  heroIndex: number;
  navigationOpen: boolean;
};

const hero = (state: SlidesStateType = {
  slides: [
    {
      title: 'UTG Academy Website Redesign',
      subTitle: 'Coders will be the wizard of tomorrow',
      img: 'photo-1544511916-0148ccdeb877',
      link: "#"
    },
    {
      title: 'World Revolution App',
      subTitle: 'Now is the time to find each other and assemble',
      img: 'photo-1544572571-ab94fd872ce4',
      link: "#"
    },
    {
      title: 'Strategic Planning Manager',
      subTitle: 'Get your plans on track',
      img: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
      link: "#"
    }
  ],
  autoPlay: true,
  initialRender: true,
  splashIndex: 0,
  heroIndex: 0,
  navigationOpen: false
}, action:actionArgs) => {
  switch(action.type) {
    case("SET_HERO_INDEX"):
      return {...state, heroIndex: action.payload}
    default:
      return {...state};
  }
}

export default hero;