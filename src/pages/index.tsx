import Button from '@components/buttons/Button';
import Link from 'next/link';
import * as React from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen gap-3'>
      hello
      <Link href='./test'>
        <Button>test page로</Button>
      </Link>
    </div>
    // <Layout>
    //   {/* <Seo templateTitle='Home' /> */}
    //   <Seo />

    //   <main>
    //     <section className='bg-white'>
    //       <div className='relative flex flex-col items-center justify-center min-h-screen py-12 text-center layout'>
    //         <Vercel className='text-5xl' />
    //         <h1 className='mt-4'>
    //           CosmosKit + Next.js + Tailwind CSS + TypeScript Starter
    //         </h1>
    //         <p className='mt-2 text-sm text-gray-800'>
    //           A starter for CosmosKit + Next.js, Tailwind CSS, and TypeScript
    //           with Absolute Import, Seo, Link component, pre-configured with
    //           Husky{' '}
    //         </p>

    //         <ButtonLink className='mt-6' href='/components' variant='light'>
    //           See all components
    //         </ButtonLink>
    //       </div>
    //     </section>
    //   </main>
    // </Layout>
  );
}
