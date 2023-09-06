import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './animation.module.scss';
import scrollBar from './scrollBar.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';

import Header from '@/components/layout/Header';
import MindMapLayout from '@/components/layout/MindMapLayout';
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
    return <MindMapLayout isMd={isMd}>{children}</MindMapLayout>;
  } else {
    return (
      <div className={`relative h-screen w-screen ${isDarkMode ? 'dark' : ''}`}>
        {/* <div className='fixed top-0 left-0 z-50 w-full'></div> */}
        <div
          className={`relative flex h-full w-full flex-col overflow-y-auto bg-light text-dark dark:bg-dark dark:text-light ${styles.transition} ${scrollBar.scrollBar}`}
        >
          <div className='sticky top-0 left-0 z-50 h-[68px] w-full'>
            <Header />
          </div>
          <div className='w-full h-full'>{children}</div>
          <div className='fixed flex flex-col items-end gap-2 right-3 bottom-3'>
            <div className='flex items-center gap-2 rounded-md bg-[#f8f8f880] p-2 px-5 backdrop-blur-[1px] dark:bg-[#282c3580]'>
              <SetModeBtn type={isMd ? 1 : 2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
