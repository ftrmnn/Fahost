// Navbar.js
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className={`flex items-center justify-between p-4 h-28 bg-white font-poppins transition-transform duration-300 ease-in-out ${scrollingDown ? '-translate-y-28' : 'translate-y-0'} fixed top-0 w-full`}>
      <div className="flex-shrink-0">
        <img className="md:h-16 h-12" src="/fahost.png" alt="Logo" />
      </div>

      <ul className="flex md:mt-0 md:z-0 md:top-0 relative z-10 top-10 right-16 gap-6 text-1xl py-2">
        <li className="cursor-pointer">Use</li>
        <li className="cursor-pointer">Learn</li>
        <li className="cursor-pointer">Build</li>
        <li className="cursor-pointer">Community</li>
      </ul>

      <div className="flex items-center z-20 relative right-20">
        <button className="bg-blue-500 md:text-[15px] text-white p-2 rounded text-xs">Login</button>
      </div>
    </nav>
  );
}
