import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';

const isDarkMode_ = atom<boolean>(true);
export { isDarkMode_ };

export default function SetModeBtn() {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkMode_);
  const [mode, setMode] = useState<string>('Dark Mode');

  const toggleDarkMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      // Dark mode to Light mode
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark');
      setMode('Light Mode');
      setIsDarkMode(false);
    } else {
      // Light mode to Dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setMode('Dark Mode');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [mode]);

  return (
    <div>
      <Button isDarkBg={isDarkMode} onClick={toggleDarkMode}>
        {mode}
      </Button>
    </div>
  );
}
