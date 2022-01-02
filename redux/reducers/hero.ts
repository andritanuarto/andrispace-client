import { actionArgs } from "../actions/main";
import { reducerTypes } from "../types";

export type Slide = {
  title: string,
  subTitle: string,
  img: string,
  link: string,
  imgBg: string,
  imgThumb: string;
  imgThumbWidth: number;
  imgThumbHeight: number;
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
      link: "#",
      imgBg: '/utg-bg.jpg',
      imgThumb: "/utg.png",
      imgThumbWidth: 720,
      imgThumbHeight: 453
    },
    {
      title: 'World Revolution App',
      subTitle: 'Now is the time to find each other and assemble',
      img: 'photo-1544572571-ab94fd872ce4',
      link: "#",
      imgBg: "/adbusters-bg.jpg",
      imgThumb: "/adbusters.png",
      imgThumbWidth: 530,
      imgThumbHeight: 500
    },
    {
      title: 'Strategic Planning Manager',
      subTitle: 'Get your plans on track',
      img: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
      link: "#",
      imgBg: "/envisio-bg.jpg",
      imgThumb: "/envisio.png",
      imgThumbWidth: 711.23,
      imgThumbHeight: 500
    }
  ],
  autoPlay: true,
  initialRender: true,
  splashIndex: 0,
  heroIndex: 0,
  navigationOpen: false
}, action:actionArgs) => {
  switch(action.type) {
    case(reducerTypes.SET_HERO_INDEX):
      return {...state, heroIndex: action.payload}
    case(reducerTypes.SET_HERO_AUTOPLAY):
      return {...state, autoPlay: action.payload}
    default:
      return {...state};
  }
}

export default hero;