"use client";  // 添加这一行，标记为客户端组件

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const MobileNavbar = ({ menuItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="absolute focus:outline-none right-4 top-4 transition-transform duration-300 ease-in-out"
      >
        <Menu className="w-10 h-10 text-[#f3f2e9] transform rotate-0 transition-transform duration-300 ease-in-out" />
      </button>
      <div
        className={`z-10 fixed top-0 left-0 w-full min-h-screen bg-[#45624E] p-8 flex flex-col space-y-4 transform transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? 'translate-y-0 opacity-1' : 'translate-y-full opacity-0'}`}
      >

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="fixed focus:outline-none z-50 right-4 top-4 transition-transform duration-300 ease-in-out"
        >
          <X className="w-8 h-8 text-white transform rotate-180 transition-transform duration-300 ease-in-out" />
        </button>

        {menuItems.map((item, index) => (
          <div key={index}>
            <Link href={item.href} className="text-[#C0CFB2] p-2 rounded-full" onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </Link>
            {item.dropdownItems && (
              <ul className="flex flex-col space-y-2 pl-4">
                {item.dropdownItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.href} className="text-sm text-[#C0CFB2] p-2" onClick={() => setMobileMenuOpen(false)}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
