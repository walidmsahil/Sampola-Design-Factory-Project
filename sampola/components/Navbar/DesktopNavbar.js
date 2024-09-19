"use client";  // 这是客户端组件

import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';  // 引入 usePathname 来获取当前路径

const DesktopNavbar = ({ menuItems }) => {
  // console.log('DesktopNavbar', menuItems);
  
  const [openIndex, setOpenIndex] = useState(null);

  // Handle opening submenu on hover
  const handleMouseEnter = (index) => setOpenIndex(index);

  // Handle closing submenu on mouse leave
  const handleMouseLeave = () => setOpenIndex(null);
  const pathname = usePathname();  // 使用 usePathname 钩子获取当前路径


  // Home page paths are '/en', '/fi', or '/sv'
  const isHomePage = pathname === '/en' || pathname === '/fi' || pathname === '/sv';

  // Determine if the link is active
  const isActive = (href, label) => {
    // If it's the home page, only highlight the home link (assuming home link is '/')
    if (isHomePage && (label === 'Home'|| label === 'Etusivu' || label === 'Hem')) {
      return true;
    }
    // For other links, check if pathname matches the href
    return pathname === href;
  };

  return (
    <div className="hidden lg:flex bg-[#45624E] space-x-6 rounded-full h-14 items-center p-4 min-w-fit">
      {menuItems.map((item, index) => {
        const activeClass = isActive(item.href, item.label) ? 'bg-[#F5F7EE] text-[#151515]' : 'text-[#C0CFB2]';
        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}  // Open submenu on hover
            onMouseLeave={handleMouseLeave}               // Close submenu on leave
          >
            <Link href={item.href} className={`p-2 ${activeClass}  hover:bg-[#F5F7EE] hover:text-[#151515] rounded-full transition flex items-center`}>
              {item.label}
              {item.dropdownItems && item.dropdownItems.length > 0 && ( // 只有当有子菜单项时显示图标
                <span className="ml-1">
                  {openIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              )}
            </Link>
            {/* 只有当 dropdownItems 存在且不为空时，才展示子菜单的容器 */}
            {item.dropdownItems && item.dropdownItems.length > 0 && openIndex === index && (
              <div className="absolute left-0 top-full bg-[#45624E] rounded-md z-10 min-w-max">
                <ul className="flex flex-col space-y-2 p-2 whitespace-nowrap">
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.href} className={` block px-4 py-2 text-sm  hover:bg-[#F5F7EE] hover:text-[#151515] rounded-md transition ${isActive(subItem.href, subItem.label) ? 'bg-[#F5F7EE] text-[#151515]' : 'text-[#C0CFB2]'}`}>
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
  );
};

export default DesktopNavbar;
