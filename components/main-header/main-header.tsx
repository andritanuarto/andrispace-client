import { useState } from 'react';
import Logo from '../shared/logo/logo';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './main-header.module.scss';

const MainHeader = (): JSX.Element => {
  return (
    <header className={styles.container}>
      <Logo />
      <MenuIcon className={styles.menu} fontSize="large"/>
    </header>
  )
};

export default MainHeader;
