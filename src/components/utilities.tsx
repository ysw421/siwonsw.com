import { ReactNode } from 'react';
import { forwardRef } from 'react';
import { IconType } from 'react-icons';

import styles from './animation.module.scss';

import clsxm from '@/lib/clsxm';

export function SubTitle({ subTitle }: { subTitle: string }) {
  return (
    <>
      <p className='mt-6 mb-2 text-2xl'>{subTitle}</p>
      <div className='mb-6 h-[2px] w-full rounded-full bg-dark dark:bg-light' />
    </>
  );
}

const ButtonSize = ['sm', 'base'] as const;

type BoxProps = {
  children: ReactNode;
  size?: (typeof ButtonSize)[number];
  leftIcon?: IconType;
  leftIconClassName?: string;
  className?: string;
};

export const Box = forwardRef<HTMLButtonElement, BoxProps>(
  ({
    children,
    className,
    size = 'base',
    leftIcon: LeftIcon,
    leftIconClassName,
  }) => {
    return (
      <div className='w-full my-8'>
        <div
          className={clsxm(
            `mx-auto h-auto w-fit rounded-md bg-[#d7d6d6] p-3 dark:bg-[#555c6e] ${styles.transition}`,
            className
          )}
        >
          {LeftIcon && (
            <div
              className={clsxm([
                size === 'base' && 'mr-1',
                size === 'sm' && 'mr-1.5',
              ])}
            >
              <LeftIcon
                className={clsxm(
                  [
                    size === 'base' && 'md:text-md text-md',
                    size === 'sm' && 'md:text-md text-sm',
                  ],
                  leftIconClassName
                )}
              />
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
);

export function MathBox({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsxm('my-8 flex flex-col gap-3 text-2xl', className)}>
      {children}
    </div>
  );
}
