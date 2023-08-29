import { useAtom } from 'jotai';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { isDarkMode_ } from '@/lib/darkMode';

// import styled from 'styled-components';
import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

export default function SetModeBtn({ type = 1 }: { type?: number }) {
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
          <span className='text-lg'>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
          <IconButton
            isDarkBg={isDarkMode}
            onClick={toggleDarkMode}
            className='p-1.5'
            icon={isDarkMode ? MdOutlineLightMode : MdOutlineDarkMode}
            iconClassName='text-sm'
          />
        </div>
      )}
      {type === 2 && (
        <Button
          isDarkBg={isDarkMode}
          onClick={toggleDarkMode}
          className='p-1.5'
        >
          {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </Button>
      )}
      {type === 3 && (
        <Button isDarkBg={isDarkMode} onClick={toggleDarkMode}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Button>
      )}
    </div>
  );
}
