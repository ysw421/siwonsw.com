import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import * as React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import { isDarkMode_ } from '@/lib/darkMode';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode] = useAtom(isDarkMode_);
  const folder = useRouter().pathname.split('/');
  // Put Header or Footer Here
  if (folder[1] === 'mind-map') {
    return (
      <div
        className={`h-screen w-screen font-main ${isDarkMode ? 'dark' : ''}`}
      >
        {/* <div className='fixed top-0 left-0 z-50 w-full'></div> */}
        <div className='h-full w-full bg-light text-dark duration-100 ease-in dark:bg-dark dark:text-light'>
          <Header />
          <TransformWrapper
            limitToBounds={false}
            minScale={0.2}
            initialScale={1}
          >
            <TransformComponent>
              <div className='h-screen w-screen bg-slate-200'>{children}</div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`h-screen w-screen font-main ${isDarkMode ? 'dark' : ''}`}
      >
        {/* <div className='fixed top-0 left-0 z-50 w-full'></div> */}
        <div className='h-full w-full bg-light text-dark duration-100 ease-in dark:bg-dark dark:text-light'>
          <Header />
          {children}
        </div>
      </div>
    );
  }
}
