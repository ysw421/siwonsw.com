import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import styles from './animation.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';

import IconButton from '@/components/buttons/IconButton';
import Header from '@/components/layout/Header';
import SetModeBtn from '@/components/SetModeBtn';

export default function MindMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode] = useAtom(isDarkMode_);

  const [isMd, setIsMd] = useState(false);

  const md = useMediaQuery({
    query: '(min-width : 768px)',
  });

  useEffect(() => {
    setIsMd(md);
  }, [md]);

  return (
    <div className={`h-screen w-screen font-main ${isDarkMode ? 'dark' : ''}`}>
      {/* <div className='fixed top-0 left-0 z-50 w-full'></div> */}
      <div
        className={`h-full w-full bg-light text-dark dark:bg-dark dark:text-light ${styles.transition}`}
      >
        <TransformWrapper limitToBounds={false} minScale={0.2} initialScale={1}>
          {({ resetTransform }) => (
            <>
              <TransformComponent>
                <div className='h-screen w-screen'>{children}</div>
              </TransformComponent>
              <div className='absolute right-5 bottom-5 flex flex-col items-end gap-2'>
                <div className='flex items-center gap-2'>
                  {isMd && (
                    <span className='text-lg text-white mix-blend-difference'>
                      Reset
                    </span>
                  )}
                  <IconButton
                    isDarkBg={isDarkMode}
                    icon={AiOutlineHome}
                    className='p-1.5'
                    onClick={() => resetTransform()}
                  />
                </div>
                <SetModeBtn difference={true} type={isMd ? 1 : 2} />
              </div>
            </>
          )}
        </TransformWrapper>
        <Header difference={true} />
      </div>
    </div>
  );
}
