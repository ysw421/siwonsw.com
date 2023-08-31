import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import styles from './animation.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';

import Header from '@/components/layout/Header';
import MindMapLayout from '@/components/layout/MindMapLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode] = useAtom(isDarkMode_);
  const folder = useRouter().pathname.split('/');

  if (folder[1] === 'mind-map') {
    return <MindMapLayout>{children}</MindMapLayout>;
  } else {
    return (
      <div
        className={`h-screen w-screen overflow-hidden font-main ${
          isDarkMode ? 'dark' : ''
        }`}
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
