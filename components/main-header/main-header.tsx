import { useState } from 'react';
import Logo from '../shared/logo/logo';
import MenuIcon from '@material-ui/icons/Menu';
import { cx } from '@emotion/css';
import styles from './main-header.module.scss';

const MainHeader = (): JSX.Element => {
  const [ isNavigationOpen, setIsNavigationOpen ] = useState(false);
  const logo = (
    <div className={cx(styles["logo"])}>
      andri&apos;space
      <span>UI / UX / DEV</span>
    </div>
  )

  return (
    <div className={styles.container}>
      <Logo />
      <MenuIcon className={styles.menu} />
      <button onClick={() => setIsNavigationOpen(!isNavigationOpen)}>adasda</button>
    </div>
  )
};

export default MainHeader;
