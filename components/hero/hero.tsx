import { useEffect } from 'react';
import { connect } from "react-redux";
import { useTransition, animated } from '@react-spring/web';
import { Action } from 'redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import { SlidesStateType } from '../../redux/reducers/hero';
import { setHeroIndex, setAutoPlay } from '../../redux/actions/hero';
import { ThunkDispatch } from 'redux-thunk/es/types';
import { reducerTypes } from '../../redux/types';
import styles from './hero.module.scss';

type HeroPropsType = {
  hero: SlidesStateType;
  handleHeroIndex: (index: number) => void;
  handleAutoPlay: (isOn: boolean) => void;
};

const Hero: React.VFC<HeroPropsType> = ({ hero, handleHeroIndex, handleAutoPlay }) => {
  const { slides, heroIndex, autoPlay } = hero;
  const router = useRouter()
  console.log(router, 'router');
  const transitions = useTransition(heroIndex, {
    key: heroIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2500 },
  });

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        handleHeroIndex((heroIndex + 1) >= slides.length ? 0 : heroIndex + 1);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [heroIndex, autoPlay]);

  return (
    <div className={styles["container"]}>
      {transitions((style, index) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(${slides[index].imgBg})`,
            backgroundSize: 'cover',
            backgroundPosition: "50%"
          }}
        >
          <div className={styles["overlay"]} />
          <div className={styles["hero-info-wrap"]}>
            <div className={styles["hero-info-l"]}>
              <Image 
                src={slides[index].imgThumb}
                layout="responsive"
                width={slides[index].imgThumbWidth}
                height={slides[index].imgThumbHeight}
              />
            </div>
            <div className={styles["hero-info-r"]}>
              <h1>{slides[index].title}</h1>
              <span>{slides[index].subTitle}</span>
              <Link href="/">
                <a>Read More <ArrowRightAlt /></a>
              </Link>
            </div>
          </div>
        </animated.div>
      ))}
      <div className={styles["hero-nav"]}>
        <ul>
          {
            slides.map((slide, index) => {
              return (
                <li
                  className={heroIndex === index ? styles["active"] : ''}
                  key={slide.title}
                  onClick={() => {
                    handleHeroIndex(index);
                    autoPlay && handleAutoPlay(false);
                  }}
                />
              )
            })
          }
        </ul>
        <strong>0{heroIndex + 1} / 0{slides.length}</strong>
        <button
          onClick={() => {
            handleHeroIndex((heroIndex - 1) < 0 ? slides.length - 1 : heroIndex - 1);
            autoPlay && handleAutoPlay(false);
          }}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => {
            handleHeroIndex(heroIndex + 1 > slides.length - 1 ? 0 : heroIndex + 1);
            autoPlay && handleAutoPlay(false);
          }}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
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
    hero: state.hero,
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Hero);