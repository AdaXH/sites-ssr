import React, { memo } from 'react';
import styles from './styles.module.less';

export default memo(() => {
  return (
    <footer className={styles.footer}>
      Copyright (c) Sites Group All Rights Reserved.{' '}
      <a
        target="blank"
        data-line
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602011734"
      >
        NO : 33010602011734
      </a>
    </footer>
  );
});
