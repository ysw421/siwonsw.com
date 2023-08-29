import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import styles from './animation.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';

import Header from '@/components/layout/Header';
import SetModeBtn from '@/components/SetModeBtn';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode] = useAtom(isDarkMode_);
  const folder = useRouter().pathname.split('/');

  const [isMd, setIsMd] = useState(false);
  const md = useMediaQuery({
    query: '(min-width : 768px)',
  });

  useEffect(() => {
    setIsMd(md);
  }, [md]);

  if (folder[1] === 'mind-map') {
    return (
      <div
        className={`h-screen w-screen font-main ${isDarkMode ? 'dark' : ''}`}
      >
        {/* <div className='fixed top-0 left-0 z-50 w-full'></div> */}
        <div
          className={`h-full w-full bg-light text-dark dark:bg-dark dark:text-light ${styles.transition}`}
        >
          <TransformWrapper
            limitToBounds={false}
            minScale={0.2}
            initialScale={1}
          >
            <TransformComponent>
              <div className='h-screen w-screen'>{children}</div>
            </TransformComponent>
          </TransformWrapper>
          <Header difference={true} />
          <div className='absolute right-5 bottom-5 rounded'>
            <SetModeBtn difference={true} type={isMd ? 1 : 2} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`h-screen w-screen font-main ${isDarkMode ? 'dark' : ''}`}
      >
        {/* <div className='fixed top-0 left-0 z-50 w-full'></div> */}
        <div
          className={`h-full w-full bg-light text-dark dark:bg-dark dark:text-light ${styles.transition}`}
        >
          {children}
          <Header />
        </div>
      </div>
    );
  }
}
