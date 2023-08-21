import { AppProps } from 'next/app';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/base.scss';
import '@/styles/colors.scss';
import '@/styles/fonts.scss';
import '@/styles/utilities.scss';

import Header from '@/components/layout/Header';

// import { TailwindModal } from '@/components/wallet';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='font-main'>
        {/* <div className='fixed top-0 left-0 z-50 w-full'></div> */}
        <div className='w-screen h-screen bg-light text-dark dark:bg-dark dark:text-light'>
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
