"use client"

import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from "next-themes";
export function DarkModeSwitcher() {
  const { theme, setTheme } = useTheme();
  const handleChangeMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <span className='min-w-[44px] min-h-[44px] flex items-center'  
      onClick={handleChangeMode}>
        <button className='bg-white dark:bg-gray-800  ml-auto w-[42px] h-[24px] border-gray-200 border-[1.5px] rounded-lg flex items-center justify-center p-2 relative cursor-pointer text-sm dark:border-white/10'>
        <div className='text-gray-800 dark:text-white'><BsFillSunFill /></div>
        <div className='text-gray-800 dark:text-white'><BsFillMoonFill /></div>
        <div
            className='w-[18px] h-[18px] border-[3px] border-blue-300 bg-blue-400 rounded-full absolute left-[2px] right-auto dark:left-auto  dark:right-[2px]'
        />
        </button>
    </span>
  );
};
