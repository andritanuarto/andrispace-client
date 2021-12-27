import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import styles from './hero.module.scss';

const Hero = (): JSX.Element => {
  const slides = [
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
    },
  ];

  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  });

  useEffect(() => {
    const t = setInterval(() => set(state => (state + 1) % slides.length), 4000)
    return () => clearTimeout(t);
  }, []);

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
}

export default Hero;