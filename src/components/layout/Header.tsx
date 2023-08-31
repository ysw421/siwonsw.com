import Link from 'next/link';
import * as React from 'react';

import NextImage from '@/components/NextImage';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header({
  difference = false,
}: {
  difference?: boolean;
}) {
  return (
    <>
      <header className='absolute top-0 left-0 h-[64px] w-full select-none px-5'>
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
            {difference && (
              <span className='text-2xl font-bold text-white mix-blend-difference'>
                Siwon's Profile
              </span>
            )}
            {!difference && (
              <span className='text-2xl font-bold'>Siwon's Profile</span>
            )}
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
