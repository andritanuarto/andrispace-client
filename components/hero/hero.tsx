import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useTransition, animated } from '@react-spring/web';
import styles from './hero.module.scss';
import { SlidesStateType } from '../../redux/reducers/hero';
import { setHeroIndex } from '../../redux/actions/hero';

type HeroPropsType = {
  hero: SlidesStateType;
  handleHeroIndex: (index: number) => void;
};

const Hero: React.VFC<HeroPropsType> = ({ hero, handleHeroIndex }) => {
  const slides = hero.slides;
  const heroIndex = hero.heroIndex;
  const transitions = useTransition(heroIndex, {
    key: heroIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1500 },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      handleHeroIndex((heroIndex + 1) >= slides.length ? 0 : heroIndex + 1);
    }, 10000);
    return () => clearTimeout(timer);
  }, [heroIndex]);

  return (
    <div className={styles["container"]}>
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(https://images.unsplash.com/${slides[i].img}?w=1920&q=80&auto=format&fit=crop)`,
          }}
        >
          <h1>{slides[i].title}</h1>
        </animated.div>
      ))}
    </div>
  );
};

export const mapDispatchToProps = (dispatch:any) => {
  return {
    handleHeroIndex: (heroIndex: number) => {
      dispatch(setHeroIndex(heroIndex));
    }
  };
}

const mapStateToProps = (state: {hero: SlidesStateType}) => {
  return {
    hero: state.hero
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Hero);