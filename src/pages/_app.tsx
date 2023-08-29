import { AppProps } from 'next/app';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/base.scss';
import '@/styles/colors.scss';
import '@/styles/fonts.scss';
import '@/styles/utilities.scss';

// import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

// import { TailwindModal } from '@/components/wallet';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
