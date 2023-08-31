import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import NextImage from '@/components/NextImage';
import SetModeBtn from '@/components/SetModeBtn';

export default function Custom404() {
  const [isMd, setIsMd] = useState(false);

  const md = useMediaQuery({
    query: '(min-width : 768px)',
  });

  useEffect(() => {
    setIsMd(md);
  }, [md]);

  return (
    <>
      <div className='flex h-screen w-screen flex-col items-center justify-center'>
        <NextImage
          useSkeleton
          src='/images/404/404img.svg'
          alt='404 img'
          width={204}
          height={1}
        ></NextImage>
        <p className='mt-3 font-fontSub text-4xl md:text-5xl'>404 Error</p>
        <p className='text-md font-fontSub'>Page not found</p>
      </div>
      <div className='absolute right-5 bottom-5 flex flex-col items-end gap-2'>
        <div className='flex items-center gap-2'>
          <SetModeBtn difference={true} type={isMd ? 1 : 2} />
        </div>
      </div>
      <div className='fixed top-[58px] left-[30px] flex items-center gap-2'>
        <svg
          className='-scale-x-100'
          width='40'
          height='auto'
          viewBox='-2 -2 27 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.5 11H14C18 11 19 7.66667 19 6V1M15 4L18 1C18.8 0.200002 19.6667 0.666669 20 1L23 4'
            stroke-width='1.2'
            stroke-linecap='round'
            className='stroke-dark dark:stroke-light'
          />
        </svg>
        <span>여기를 클릭하여 홈으로</span>
      </div>
    </>
  );
}
