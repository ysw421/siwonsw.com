'use client';

import { useTheme } from 'next-themes';
import { CiDark, CiLight } from 'react-icons/ci';
import { useState, useEffect } from 'react';

function ThemeIcon() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <CiLight />;
  }

  if (theme === 'dark') {
    return <CiDark />;
  } else {
    return <CiLight />;
  }
}

export function ToggleThemeRound() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex justify-center items-center rounded-full bg-white shadow-round text-[--color-ui-font] w-[40px] h-[40px] fixed right-4 bottom-4"
    >
      <ThemeIcon />
    </button>
  );
}

export function ToggleThemeEmojiBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <div className="flex gap-1 items-center">
        <ThemeIcon />
        Theme
      </div>
    </button>
  );
}
