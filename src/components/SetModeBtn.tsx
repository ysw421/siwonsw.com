import { useAtom } from 'jotai';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { isDarkMode_ } from '@/lib/darkMode';

// import styled from 'styled-components';
import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

export default function SetModeBtn({
  type = 1,
  difference = false,
}: {
  type?: number;
  difference?: boolean;
}) {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkMode_);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  return (
    <div>
      {type === 1 && (
        <div className='flex items-center gap-2'>
          {difference && (
            <span className='text-lg font-thin text-white mix-blend-difference'>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          )}
          {!difference && (
            <span className='text-lg'>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          )}
          <IconButton
            isDarkBg={isDarkMode}
            onClick={toggleDarkMode}
            // className='bg-light p-1.5 dark:bg-dark'
            className='p-1.5'
            icon={isDarkMode ? MdOutlineLightMode : MdOutlineDarkMode}
            iconClassName='text-sm'
          />
        </div>
      )}
      {type === 2 && (
        <Button onClick={toggleDarkMode} className='p-1.5'>
          {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </Button>
      )}
      {type === 3 && (
        <Button onClick={toggleDarkMode}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Button>
      )}
    </div>
  );
}
