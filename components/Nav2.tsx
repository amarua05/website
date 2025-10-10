"use client";
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsList, BsX, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

function Nav2() {
  const[menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
  <header>
    <nav className='fixed flex w-full h-24 bg-gray-900 shadow-xl z-10'>
      {/**Desktop Menu */}
      <div className='bg-gray-900 flex-1 flex items-center justify-between h-full px-4 w-full'>
      <Link href="/">
      <Image className="cursor-pointer"
           src="/white-logo.png" 
           alt="Amar Emini Logo"
           width={70}
           height={70}
           />
      </Link>  
        <div className='hidden sm:flex text-white'>
          <ul className='hidden sm:flex'>
            <li className='navLinksActive'>
              <Link href="/#home">Home</Link>
            </li>
            <li className='navLinks'>
              <Link href="/aboutme">About Me</Link>
            </li>
            <li className='navLinks'> 
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="navLinks">
              <Link href="/#contact">Contact me</Link>
            </li>
          </ul>
        </div>
      <div onClick = {toggleMenu} className='sm:hidden cursor-pointer pl-24'>
        <BsList className='h-8 w-8 text-white'></BsList>
      </div>
      </div>
      {/* Mobile Menu */}
      <div className={menuOpen ? 'fixed items-center top-0 right-0 w-[75%] sm:hidden h-full bg-black ease-in-out duration-500 shadow-' : 'fixed items-center top-0 right-[-100%] ease-in-out duration-500'}>
        <div className='flex'>
        <div className="flex flex-1"></div>
        <div className='flex flex-1 justify-center'> {/** DIV 1 */}
            <Image 
            alt='Logo' 
            src='/white-logo.png' 
            width={70} 
            height={70} 
            className='mt-[0.45rem]'>  
            </Image>
        </div>
        <div className='justify-end flex flex-1'> {/** DIV 2 */}
            <BsX onClick = {toggleMenu} className='mt-4 mx-4 h-12 w-12 text-white cursor-pointer'></BsX>
        </div>
        </div>        
        {/* Mobile Menu Links */}
        <div className='flex flex-col py-4 items-center text-center'>
          <ul>
            <li onClick = {() => setMenuOpen(false)} className='navLinks'>
            <Link className='text-white' href="/aboutme">About Me</Link>
            </li>
            <li onClick = {() => setMenuOpen(false)}className='navLinks'>
            <Link className='text-white' href="/#projects">Projects</Link>
            </li>
            <li onClick = {() => setMenuOpen(false)}className='navLinks'>
              <Link className='text-white' href="/#contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        {/**Social Media Links */}
        <div className='flex flex-row justify-around pt-10'>
          <a aria-label='Instagram' href='https://instagram.com/_aamaar1' target='_blank' rel='noreferrer' className='cursor-pointer text-white'>
            <BsInstagram />
          </a>
          <a aria-label='LinkedIn' href='https://linkedin.com/in/amar-emini-b82309247' target='_blank' rel='noreferrer' className='cursor-pointer text-white'>
            <BsLinkedin />
          </a>
          <a aria-label='GitHub' href='https://github.com/amarua05' target='_blank' rel='noreferrer' className='cursor-pointer text-white'>
            <BsGithub />
          </a>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Nav2
