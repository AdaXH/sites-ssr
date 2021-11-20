import React, { useState } from 'react';
import { useDidMount } from '@/utils/hooks';
import Design from '../design';
import { Header } from '../header';
import { TopImg } from '../topImg';
import styles from './styles.module.less';
import { Admin } from '../admin';

interface LayoutProps {
  children: React.ReactNode | Element;
  history: History;
}

export const CommonLayout: React.FC<LayoutProps> = (props) => {
  const { children, history } = props;
  const {
    location: { pathname = '' },
  } = history;
  if (/super-admin/.test(pathname)) return <Admin history={history}>{children}</Admin>;
  const [keyPath, setPath] = useState<string>(pathname);
  useDidMount(() => {
    history.listen(({ pathname: path }) => setPath(path));
  });
  return (
    <div className={styles.body}>
      <Header history={history} />
      <span>
        <TopImg />
        {/* <div className={styles.bg}>
        <Wave />
      </div> */}
        {/* <Shake> */}
        <div className={styles.animate} key={keyPath}>
          {children}
        </div>
        {/* </Shake> */}
        <Design />
      </span>
    </div>
  );
};
