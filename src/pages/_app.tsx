import { AppProps } from 'next/app';
import Div100vh from 'react-div-100vh';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/base.scss';
import '@/styles/colors.scss';
import '@/styles/fonts.scss';
import '@/styles/utilities.scss';
import '@/styles/inputNumber.scss';

// import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// import { TailwindModal } from '@/components/wallet';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Div100vh>
      <Seo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Div100vh>
  );
}

export default MyApp;
