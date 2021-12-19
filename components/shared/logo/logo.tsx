import { cx } from '@emotion/css';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={cx(styles["logo"])}>
      andri&apos;space
      <span>UI / UX / DEV</span>
    </div>
  );
};

export default Logo;