'use client';

import { useState, useEffect, useRef } from 'react';
import DesktopNavbar from './DesktopNavbar'; // 客户端组件
import MobileNavbar from './MobileNavbar';   // 客户端组件
import LanguageSwitcher from './LanguageSwitcher'; // 客户端组件
import FontSizeSwitcher from './FontSizeSwitcher';  // 客户端组件
import { ThemeToggle } from "@/components/theme-toggle";  // 客户端组件

export default function NavbarClient({ menuItems, currentLocale }) {
  const [showDesktopMenu, setShowDesktopMenu] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(true); // 控制移动端导航栏的显示
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 控制移动端菜单的展开状态
  const [isSwitchingFontSize, setIsSwitchingFontSize] = useState(false); // 控制移动端菜单的展开状态
  const lastScrollY = useRef(0);
  const threshold = 5; // 设置滚动的阈值，用于防止顶部回弹隐藏导航栏

  // 用于跟踪菜单显示状态的最新值
  const showDesktopMenuRef = useRef(showDesktopMenu);
  const showMobileMenuRef = useRef(showMobileMenu);

  useEffect(() => {
    showDesktopMenuRef.current = showDesktopMenu;
    showMobileMenuRef.current = showMobileMenu;
  }, [showDesktopMenu, showMobileMenu]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;

      if (Math.abs(deltaY) > threshold && !isMobileMenuOpen) { // 菜单展开时不受滚动影响
        if (deltaY > 0 && currentScrollY > 0) {
          // 向下滚动时隐藏菜单
          if (isSwitchingFontSize) return // 正在切换字体大小时不隐藏菜单
          if (showDesktopMenuRef.current) setShowDesktopMenu(false);
          if (showMobileMenuRef.current) setShowMobileMenu(false);
        } else if (deltaY < 0) {
          // 向上滚动时显示菜单
          if (!showDesktopMenuRef.current) setShowDesktopMenu(true);
          if (!showMobileMenuRef.current) setShowMobileMenu(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen,isSwitchingFontSize]); // 当菜单展开时停止滚动控制

  return (
    <nav className="fixed lg:top-4 lg:left-4 top-0 left-0 right-0 z-10">
      {/* 桌面端菜单 */}
      <div
        className={`max-w-[2000px] m-auto hidden lg:flex items-center justify-between transition-transform duration-300 ${
          showDesktopMenu ? 'translate-y-0' : '-translate-y-[calc(100%+1rem)]'
        }`}
      >
        <DesktopNavbar menuItems={menuItems} currentLocale={currentLocale} />
        <div className="ml-auto hidden lg:flex items-center rounded-full bg-primary h-16 space-x-4 mr-4 p-4">
          <FontSizeSwitcher setIsSwitchingFontSize={setIsSwitchingFontSize} isSwitchingFontSize={isSwitchingFontSize} />
          <LanguageSwitcher currentLocale={currentLocale}  />
          <ThemeToggle />
        </div>
      </div>

      {/* 移动端菜单导航栏 */}
      <div
        className={`flex lg:hidden items-center lg:p-4 transition-transform duration-300 ${
          showMobileMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <MobileNavbar
          menuItems={menuItems}
          mobileMenuOpen={isMobileMenuOpen}
          setMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </nav>
  );
}
