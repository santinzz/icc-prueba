'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { useRef, useState } from 'react';

import { navLinks, socialLinks } from '@/info/navbarInfo';
import { cn } from '@/lib/utils';

const navbarFont = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
});

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  const backdropSquareRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = (event: any) => {
    const { current: backdropSquare } = backdropSquareRef;
    if (!backdropSquare) return;

    if (event.target.getAttribute('href') === currentPath) return;
    const { height, width, left, top } = event.target.getBoundingClientRect();


    backdropSquare.style.setProperty('--left', `${left}px`);
    backdropSquare.style.setProperty('--top', `${top}px`);
    backdropSquare.style.setProperty('--width', `${width}px`);
    backdropSquare.style.setProperty('--height', `${height}px`);
  };

  const handleMouseOut = () => {
    const { current: backdropSquare } = backdropSquareRef;
    if (!backdropSquare) return;

    backdropSquare.style.setProperty('--width', '0');
    backdropSquare.style.setProperty('--height', '0');
  };

  const handleClick = (event: any) => {
    setCurrentPath(event.currentTarget.getAttribute('href') || '/');
  }

  return (
    <header className='flex fixed top-0 h-28 left-0 right-0 mx-auto justify-center bg-white shadow-md'>
      <div className='w-full max-w-7xl px-4 py-3 flex justify-between items-center'>
        <nav>
        <Image
          src='/logo.webp'
          alt='Logo del Instituto Central Coahuila'
          width={100}
          height={100}
          style={{ width: '70px', height: 'auto' }}
          priority
        />
      </nav>
      <nav onMouseLeave={handleMouseOut} className={cn('absolute w-full translate-x-[200%] duration-300 right-0 top-0 mt-32 -z-20 bg-white shadow-lg md:static md:translate-x-0 md:mt-0 md:bg-transparent md:duration-0 md:z-auto md:w-auto md:shadow-none', isMenuClicked ? 'translate-x-0' : 'translate-x-[120%]')}>
        <ul className='flex flex-col items-center gap-8 py-8 md:py-0 md:gap-2 md:flex-row md:items-start w-full md:w-auto z-40 md:z-auto'>
          {navLinks.map(({ text, href }, index) => (
            <li key={index}>
              <Link
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                className={cn(
                  'px-3 py-2 rounded-sm',
                  navbarFont.className,
                  currentPath === href ? 'bg-slate-950/15' : ''
                )}
                href={href}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className='flex items-center gap-3 md:gap-0'>
        {socialLinks.map(({ ariaLabel, href, Icon }, index) => (
          <Link
            key={index}
            href={href}
            aria-label={ariaLabel}
            className='md:px-2 md:py-3'
          >
            <Icon className='size-12 md:size-9' />
          </Link>
        ))}
        <div
          onClick={() => setIsMenuClicked(!isMenuClicked)}
          className='flex flex-col gap-[0.65rem]  md:hidden w-10 py-3'>
          <div className={cn('h-1 bg-slate-950 origin-left duration-300', isMenuClicked ? 'rotate-45' : 'rotate-0')}></div>
          <div className={cn('h-1 bg-slate-950 origin-left duration-300', isMenuClicked ? 'opacity-0' : 'opacity-1')}></div>
          <div className={cn('h-1 bg-slate-950 origin-left duration-300', isMenuClicked ? '-rotate-45' : 'rotate-0')}></div>
        </div>
      </nav>

      <div
        ref={backdropSquareRef}
        className={`
          absolute md:backdrop-blur-lg bg-slate-950/15
          duration-200 ease-in-out
          left-[var(--left)] top-[var(--top)]
          w-[var(--width)] h-[var(--height)]
          -z-10 pointer-events-none
          rounded-sm
        `}
      ></div>
      </div>
    </header>
  );
};

export default Navbar;
