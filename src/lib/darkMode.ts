import { atomWithStorage } from 'jotai/utils';

// class LocalStorage {
//   constructor() {
//     return;
//   }

//   static setItem(key: string, value: string) {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem(key, value);
//     }
//   }

//   static getItem(key: string) {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem(key);
//     }
//     return null;
//   }

//   static removeItem(key: string) {
//     if (typeof window !== 'undefined') {
//       localStorage.removeItem(key);
//     }
//   }
// }

// const initialTheme: boolean =
//   LocalStorage.getItem('theme') === 'true' ? true : false;
export const isDarkMode_ = atomWithStorage<boolean>('theme', false);

// const ChangeTheme = (e: boolean) => {
//   const setIsDarkMode = useSetAtom(isDarkMode_);
//   setIsDarkMode(e);
// };

// if (initialTheme === true) ChangeTheme(true);

// ! e.g.
// import { useAtom } from 'jotai';
// import { isDarkMode_ } from '@/lib/darkMode';

// const [isDarkMode, setIsDarkMode] = useAtom(isDarkMode_);
