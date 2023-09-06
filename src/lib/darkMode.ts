import { atomWithStorage } from 'jotai/utils';

export const isDarkMode_ = atomWithStorage('theme', true);

// ! e.g.
// import { useAtom } from 'jotai';
// import { isDarkMode_ } from '@/lib/darkMode';

// const [isDarkMode] = useAtom(isDarkMode_);
