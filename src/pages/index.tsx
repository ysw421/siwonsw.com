import { useAtom } from 'jotai';
import Link from 'next/link';
import * as React from 'react';

import { isDarkMode_ } from '@/lib/darkMode';

import Button from '@/components/buttons/Button';
import MadeWith from '@/components/MadeWith🔥BySiwon';
import SetModeBtn from '@/components/SetModeBtn';

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
  const [isDarkMode] = useAtom(isDarkMode_);

  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-3 '>
      <span className='text-6xl '>🖐️</span>
      <span className='mb-5 text-center'>
        <p className='mb-1 text-4xl'>Hello, i am siwon.</p>
        <p className='text-blue-500 text-xm dark:text-red-400'>
          CosmosKit + Nextjs + Tailwind + Typescript + Scss
        </p>
        <div className='h-1'></div>
        <MadeWith />
      </span>
      <Link href='./paper/test'>
        <Button isDarkBg={isDarkMode}>Go to Test Page</Button>
      </Link>
      <SetModeBtn />
    </div>
  );
}
