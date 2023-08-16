import Link from 'next/link';
import * as React from 'react';

import Button from '@/components/buttons/Button';

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
  );
}
