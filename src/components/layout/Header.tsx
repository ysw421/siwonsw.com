import Link from 'next/link';
import * as React from 'react';

import styles from './animation.module.scss';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header({
  className = '',
  isAllowAnimation,
}: {
  difference?: boolean;
  className?: string;
  zIndex?: boolean;
  isAllowAnimation: boolean;
}) {
  return (
    <>
      <header
        className={clsxm(
          `sticky top-0 left-0 z-50 h-[64px] w-full select-none bg-[#f8f8f880] px-5 backdrop-blur-[2px] dark:bg-[#282c3580] ${
            isAllowAnimation && styles.transition
          }`,
          className
        )}
      >
        <div className='flex h-full w-full'>
          <Link href='/' className='flex items-center gap-2 md:gap-3'>
            <NextImage
              useSkeleton
              src='/images/my-logo.png'
              width='180'
              height='180'
              alt='Logo'
              className='w-[40px]'
              imgClassName='rounded-full'
            />
            <span className='text-2xl'>Siwon</span>
          </Link>
        </div>
        {/* <div className='flex items-center justify-between w-full layout h-14'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}
      </header>
    </>
  );
}
