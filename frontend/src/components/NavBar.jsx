import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const NavBar = () => {

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  /*document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )*/

  const [darkMode, setDarkMode] = useState("light");

  const toggleColorMode = () => {
    setDarkMode(mode => {
      if(mode === "light") return mode = "dark";
      else return mode = "light";
    });
    //localStorage.theme = darkMode;
    if(darkMode === 'dark'){
      document.documentElement.classList.add(darkMode);
    } else{
      document.documentElement.classList.remove("dark")
    }
  }

  

  // Whenever the user explicitly chooses light mode
  //localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  //localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

  return (
    <nav className='flex max-w-[1100px] dark:bg-[#313131] rounded-sm justify-between w-full bg-slate-200 px-6 py-4 '>
        <Link to="/" className='font-semibold text-4xl text-pink-600'>
          Electric Store
        </Link >
        <div className='flex items-center gap-4'>
          <Link to="/CreatePage" className='dark:bg-[#575757] bg-[#cfcfcf] rounded-md p-1'>
              <CiSquarePlus size={40} color='red'></CiSquarePlus>
          </Link>
          <button onClick={toggleColorMode} className='rounded-md dark:bg-[#575757] p-2 bg-[#cfcfcf]'>
              {darkMode === "light"? <LuSun color='white' size={30}></LuSun> : <IoMoon size={30}></IoMoon>}
          </button>
        </div>
    </nav>
  )
}

export default NavBar
