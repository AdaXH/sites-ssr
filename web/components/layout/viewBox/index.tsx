import React, { memo } from 'react';
import Antmotion from '@/components/antMotion';
import EffCircle from '@/components/effectCircle';
import { AsideProps } from '@/components/aside';
import RunMan from '@/components/runMan';
// import Title from '@/component/title';

import styles from './styles.module.less';

export default memo(({ data, onChangeBg }: AsideProps) => (
  <React.Fragment>
    <div className={styles.effBox}>
      <RunMan />
      <EffCircle data={data} onChangeBg={onChangeBg} />
      {/* <div className={styles.pageTitle}>
        <Title />
      </div> */}
      <div className={styles.animationFrameOne} />
      <div className={styles.animationFrameThree} />
      <div className={styles.animationFour} />
      <div className={styles.effBoxRight}>
        <Antmotion />
      </div>
    </div>
  </React.Fragment>
));
