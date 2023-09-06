import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

import styles from './animation.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';

import MadeWith from '@/components/MadeWith🔥BySiwon';

export default function Paper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isDarkMode] = useAtom(isDarkMode_);
  const commentsEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.async = true;
    scriptEl.src = 'https://giscus.app/client.js';
    scriptEl.setAttribute('data-repo', 'ysw421/My-blog');
    scriptEl.setAttribute('data-repo-id', 'R_kgDOJCUXQQ');
    scriptEl.setAttribute('General', 'General');
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOJCUXQc4CW0wT');
    scriptEl.setAttribute('data-mapping', 'pathname');
    scriptEl.setAttribute('data-strict', '0');
    scriptEl.setAttribute('data-reactions-enabled', '1');
    scriptEl.setAttribute('data-emit-metadata', '0');
    scriptEl.setAttribute('data-input-position', 'bottom');
    scriptEl.setAttribute('data-theme', !isDarkMode ? 'light' : 'dark');
    scriptEl.setAttribute('data-lang', 'ko');
    scriptEl.setAttribute('data-loading', 'lazy');
    scriptEl.setAttribute('crossorigin-loading', 'anonymous');
    commentsEl.current?.appendChild(scriptEl);
  }),
    [isDarkMode];

  return (
    <div className={`h-full w-full ${styles.transition}`}>
      <div className='relative w-full h-full max-w-5xl px-6 pt-8 mx-auto text-md'>
        <div className='w-full h-auto'>
          <div className='inherit w-fit'>
            <Link href='/' className='flex items-center mb-1'>
              <AiOutlineLeft />
              <p>전으로</p>
            </Link>
          </div>
          <p className='text-5xl'>{title}</p>
          <div className='my-6 h-[2px] rounded-full bg-dark dark:bg-light'></div>
        </div>
        {children}
        <div className='flex justify-center w-full mt-24 mb-3'>
          <MadeWith />
        </div>
        <div ref={commentsEl} className='mx-auto w-full max-w-[800px]' />
        <div className='w-full h-24'></div>
      </div>
    </div>
  );
}
