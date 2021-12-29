import { useState } from 'react';
import Logo from '../shared/logo/logo';
import MenuIcon from '@material-ui/icons/Menu';
import { cx } from '@emotion/css';
import styles from './main-header.module.scss';

const MainHeader = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Logo />
      <MenuIcon className={styles.menu} />
    </div>
  )
};

export default MainHeader;
