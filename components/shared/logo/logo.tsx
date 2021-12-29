import { memo } from 'react';
import { cx } from '@emotion/css';
import React from 'react';
import logoStyle from './logo.module.scss';

const Logo = () => {
  return (
    <div className={cx(logoStyle["logo"])}>
      andri&apos;space
      <span>UI / UX / DEV</span>
    </div>
  );
};

export default memo(Logo);