import { useAtom } from 'jotai';
import { AiOutlineHome } from 'react-icons/ai';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import styles from './animation.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';

import IconButton from '@/components/buttons/IconButton';
import Header from '@/components/layout/Header';
import SetModeBtn from '@/components/SetModeBtn';

export default function MindMapLayout({
  isMd,
  children,
}: {
  isMd: boolean;
  children: React.ReactNode;
}) {
  const [isDarkMode] = useAtom(isDarkMode_);

  return (
    <div className={`h-screen w-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* <div className='fixed top-0 left-0 z-50 w-full'></div> */}
      <div
        className={`h-full w-full bg-light text-dark dark:bg-dark dark:text-light ${styles.transition}`}
      >
        <Header className='absolute' />
        <TransformWrapper limitToBounds={false} minScale={0.2} initialScale={1}>
          {({ resetTransform }) => (
            <>
              <TransformComponent>
                <div className='w-screen h-screen'>{children}</div>
              </TransformComponent>
              <div className='absolute flex flex-col items-end gap-2 right-5 bottom-5'>
                <div className='flex items-center gap-2'>
                  {isMd && (
                    <span className='text-lg font-thin text-white mix-blend-difference'>
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
      </div>
    </div>
  );
}
