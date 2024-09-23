'use client';

import { useState, useEffect, useRef } from 'react';
import DesktopNavbar from './DesktopNavbar'; // 客户端组件
import MobileNavbar from './MobileNavbar';   // 客户端组件
import LanguageSwitcher from './LanguageSwitcher'; // 客户端组件
import FontSizeSwitcher from './FontSizeSwitcher';  // 客户端组件
import { ThemeToggle } from "@/components/theme-toggle";  // 客户端组件

export default function NavbarClient({ menuItems, currentLocale, availableLocales }) {
  const [showDesktopMenu, setShowDesktopMenu] = useState(true);
  const lastScrollY = useRef(0);

  // 用于跟踪 showDesktopMenu 的最新值
  const showDesktopMenuRef = useRef(showDesktopMenu);

  useEffect(() => {
    showDesktopMenuRef.current = showDesktopMenu;
  }, [showDesktopMenu]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;

      if (Math.abs(deltaY) > 10) {
        if (deltaY > 0 && showDesktopMenuRef.current) {
          // 向下滚动且菜单当前显示，隐藏菜单
          setShowDesktopMenu(false);
        } else if (deltaY < 0 && !showDesktopMenuRef.current) {
          // 向上滚动且菜单当前隐藏，显示菜单
          setShowDesktopMenu(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-4 left-4 right-0 z-10">
      {/* 桌面端菜单 */}
      <div
        className={`hidden lg:flex items-center justify-between transition-transform duration-300 ${
          showDesktopMenu ? 'translate-y-0' : '-translate-y-[calc(100%+1rem)]'
        }`}
      >
        <DesktopNavbar menuItems={menuItems} currentLocale={currentLocale} />
        <div className="ml-auto hidden lg:flex items-center rounded-full bg-green h-16 space-x-4 mr-4 p-4">
          <FontSizeSwitcher />
          <LanguageSwitcher currentLocale={currentLocale} availableLocales={availableLocales} />
          <ThemeToggle />
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className="flex lg:hidden items-center p-4">
        <MobileNavbar menuItems={menuItems} />
      </div>
    </nav>
  );
}
