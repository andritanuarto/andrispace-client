import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useTransition, animated } from '@react-spring/web';
import styles from './hero.module.scss';
import { SlidesStateType } from '../../redux/reducers/hero';
import { setHeroIndex, setAutoPlay } from '../../redux/actions/hero';
import { ThunkDispatch } from 'redux-thunk/es/types';
import { reducerTypes } from '../../redux/types';
import { Action } from 'redux';

type HeroPropsType = {
  hero: SlidesStateType;
  handleHeroIndex: (index: number) => void;
  handleAutoPlay: (isOn: boolean) => void;
};

const Hero: React.VFC<HeroPropsType> = ({ hero, handleHeroIndex, handleAutoPlay }) => {
  const { slides, heroIndex, autoPlay } = hero;

  const transitions = useTransition(heroIndex, {
    key: heroIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
  });

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        handleHeroIndex((heroIndex + 1) >= slides.length ? 0 : heroIndex + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [heroIndex, autoPlay]);

  return (
    <>
      <div className={styles["container"]}>
        {transitions((style, index) => (
          <animated.div
            className={styles.bg}
            style={{
              ...style,
              backgroundImage: `url(https://images.unsplash.com/${slides[index].img}?w=1920&q=80&auto=format&fit=crop)`,
            }}
          >
            <h1>{slides[i].title}</h1>
          </animated.div>
        ))}
      </div>
      <ul>
        {
          slides.map((slide, index) => {
            return (
              <li
                key={slide.title}
                onClick={() => {
                  handleHeroIndex(index);
                  autoPlay && handleAutoPlay(false);
                }}
              >
                {index}
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export const mapDispatchToProps = (dispatch: ThunkDispatch<SlidesStateType, {}, Action<reducerTypes>>) => {
  return {
    handleHeroIndex: (heroIndex: number) => {
      dispatch(setHeroIndex(heroIndex));
    },
    handleAutoPlay: (isOn: boolean) => {
      dispatch(setAutoPlay(isOn));
    }
  };
}

const mapStateToProps = (state: {hero: SlidesStateType}) => {
  return {
    hero: state.hero
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Hero);