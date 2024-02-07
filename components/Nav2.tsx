"use client";
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsList, BsX, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const styles = {
  navLinks: 'cursor-pointer ml-10 border-b uppercase border-white hover:border-[#F6B519] text-xl'
}



function Nav2() {
  const[menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
  <header>
    <nav className='flex w-full h-24 bg-gray-800 shadow-xl'>
      {/**Desktop Menu */}
      <div className='flex-1 flex items-center sm:justify-center justify-between h-full px-4 w-full'>
      <Link href="https://amaremini.com">
      <Image className="cursor-pointer"
           src="https://amaremini.com/favicon.ico" 
           alt="Amar Emini Logo"
           width={32}
           height={32}
           />
      </Link> 
        
        <div className='hidden sm:flex text-white'>
          <ul className='hidden sm:flex'>
            <li className={styles.navLinks}>
              <Link href="/aboutme">About Me</Link>
            </li>
            <li className={styles.navLinks}> 
              <Link href="/projects">Projects</Link>
            </li>
            <li className="flex items-center space-x-5 ml-10">
              <Link href="/contactme">
                <h3 className='cursor-pointer border border-[#F6B519] px-4 py-1 rounded-full bg-[#F6B519] text-black hover:bg-black hover:text-[#F6B519] ease-in-out duration-300'>Contact me</h3>
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
      <div onClick = {toggleMenu} className='sm:hidden cursor-pointer pl-24'>
        <BsList className='h-8 w-8 text-white'></BsList>
      </div>
      </div>
      <div className={menuOpen ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-gray-400 ease-in-out duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'}>
        <div className='flex w-full items-center justify-end'>
          <div className='cursor-pointer'>
            <BsX onClick = {toggleMenu} className='h-12 w-12 text-black'></BsX>
          </div>
        </div>
        {/* Mobile Menu Links */}
        <div className='flex flex-col py-4 items-center text-center'>
          <ul>
            <li onClick = {() => setMenuOpen(false)} className='py-4 hover:underline hover:decoration-[#F6B519]'>
            <Link href="/aboutme">About Me</Link>
            </li>
            <li onClick = {() => setMenuOpen(false)}className='py-4 hover:underline hover:decoration-[#F6B519]'>
            <Link href="/projects">Projects</Link>
            </li>
            <li className='flex items-center py-4 text-[#F6B519]'>
              <p className='cursor-pointer py-1 px-4 rounded-full bg-[#F6B519] text-black hover:text-[#F6B519] hover:bg-black ease-in-out duration-300'>Contact Me</p>
            </li>
          </ul>
        </div>
        {/**Social Media Links */}
        <div className='flex flex-row justify-around pt-10'>
          <BsInstagram href='https://instagram.com/_aamaar1' className='cursor-pointer'></BsInstagram>
          <BsLinkedin href='https://linkedin.com/in/amar-emini-b82309247' className='cursor-pointer'></BsLinkedin>
          <BsGithub href='https://github.com/amarua05' className='cursor-pointer'></BsGithub>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Nav2
