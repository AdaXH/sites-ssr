import React, { memo } from 'react';
import styles from './styles.module.less';

export default memo(() => (
  <div className={styles.tips}>
    SITES{'  '} col
    <span className={styles.word}> le</span>
    {'   '}ction
  </div>
));
