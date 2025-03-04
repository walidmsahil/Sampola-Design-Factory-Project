"use client";

import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import SearchBar from '../SearchBar'

const DesktopNavbar = ({ menuItems, currentLocale }) => {
  // console.log('DesktopNavbar', menuItems);

  const [openIndex, setOpenIndex] = useState(null);
  const handleMouseEnter = (index) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);
  const pathname = usePathname();

  const isHomePage = pathname === '/en' || pathname === '/fi' || pathname === '/sv';

  const isActive = (href, label) => {
    if (isHomePage && (label === 'Home' || label === 'Etusivu' || label === 'Hem')) {
      return true;
    }
    return pathname === href;
  };

  return (
    <div className="hidden lg:flex bg-primary dark:bg-primary-dark rounded-full h-fit items-center p-3 min-w-fit">
      <Link href={`/${currentLocale}`} className="flex items-center px-2 mx-2">
        <img src="/icons/sampolaLogoGreen.svg" alt="Logo" className="w-14 h-14" />
      </Link>
      <div className='flex ml-4 space-x-1'>
        {menuItems.map((item, index) => {
          const activeClass = isActive(item.href, item.label) 
            ? 'bg-button text-[#151515] dark:bg-button dark:text-[#151515] hover:text-[#151515]' 
            : 'text-[#C0CFB2] dark:text-[#C0CFB2]';
          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href} className={`p-2 px-4 whitespace-nowrap ${activeClass} hover:bg-button hover:text-[#151515] dark:hover:bg-button dark:hover:text-[#151515] rounded-full transition flex items-center`}>
                {item.label}
                {item.dropdownItems && item.dropdownItems.length > 0 && (
                  <span className="ml-1">
                    {openIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                )}
              </Link>
              {item.dropdownItems && item.dropdownItems.length > 0 && openIndex === index && (
                <div className="absolute left-0 top-full bg-primary dark:bg-[#242423] rounded-md z-10 min-w-max">
                  <ul className="flex flex-col space-y-2 p-2 whitespace-nowrap">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.href} className={`block px-4 py-2 text-sm hover:bg-button hover:text-[#151515] dark:hover:bg-button dark:hover:text-[#151515] rounded-md transition ${
                          isActive(subItem.href, subItem.label) 
                            ? 'bg-button text-[#151515] dark:bg-button dark:text-[#151515]' 
                            : 'text-[#C0CFB2] dark:text-[#C0CFB2]'
                        }`}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <SearchBar/>
    </div>
  );
};

export default DesktopNavbar;