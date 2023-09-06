import NextImage from '@/components/NextImage';

export default function Custom404() {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <NextImage
          useSkeleton
          src='/images/404/404img.svg'
          alt='404 img'
          width={204}
          height={1}
        ></NextImage>
        <p className='mt-3 text-4xl font-fontSub md:text-5xl'>404 Error</p>
        <p className='text-md font-fontSub'>Page not found</p>
      </div>
      <div className='fixed top-[62px] left-[30px] flex items-center gap-2'>
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
            strokeWidth='1.2'
            strokeLinecap='round'
            className='stroke-dark dark:stroke-light'
          />
        </svg>
        <span>여기를 클릭하여 홈으로</span>
      </div>
    </>
  );
}
