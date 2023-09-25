import { useAtom } from 'jotai';

import styles from '@/components/animation.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';

export const DraggableBar = () => {
  const [isDarkMode] = useAtom(isDarkMode_);

  return (
    <svg
      width='9'
      height='9'
      viewBox='0 0 9 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.transition}
    >
      <path
        d='M7 2C7 1.66667 7 1.6 7 4C7 6.4 5 7 4 7H2'
        stroke={isDarkMode ? 'white' : 'black'}
        strokeWidth='2.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const DraggableHorizontalBar = () => {
  const [isDarkMode] = useAtom(isDarkMode_);

  return (
    <svg
      width='16'
      height='4'
      viewBox='0 0 16 4'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.transition}
    >
      <path
        d='M2 2C11.6 2 14 2 14 2'
        stroke={isDarkMode ? 'white' : 'black'}
        strokeWidth='2.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const DraggableVerticalBar = () => {
  const [isDarkMode] = useAtom(isDarkMode_);

  return (
    <svg
      width='4'
      height='16'
      viewBox='0 0 4 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.transition}
    >
      <path
        d='M2 14C2 4.4 2 2 2 2'
        stroke={isDarkMode ? 'white' : 'black'}
        strokeWidth='2.5'
        strokeLinecap='round'
      />
    </svg>
  );
};
