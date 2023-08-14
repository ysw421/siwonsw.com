import { AppProps } from 'next/app';

import '@/styles/globals.scss';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.scss';

// import { TailwindModal } from '@/components/wallet';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='fixed top-0 left-0 z-50 w-full'></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
