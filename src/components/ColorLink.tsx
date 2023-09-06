import Link from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

export default function ColorLink({
  href,
  target = '_self',
  className = '',
  children,
}: {
  href: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={clsxm('text-link dark:text-linkRed', className)}
    >
      {children}
    </Link>
  );
}
