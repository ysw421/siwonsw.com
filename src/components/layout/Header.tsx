import * as React from 'react';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  return (
    <header className='absolute top-0 z-50 w-full h-20 px-5 '>
      <div className='flex items-center justify-between w-full h-full'>
        <span className='text-2xl font-bold'>Siwon's Profile</span>
        <img
          src='images/my-logo.png'
          alt='Logo'
          className='rounded-full h-1/2'
        />
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
  );
}
