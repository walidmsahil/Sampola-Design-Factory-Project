"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SearchBar from '../SearchBar';
import { useState } from 'react';
import { Separator } from "@/components/ui/separator"
import FontSizeSwitcher from "./FontSizeSwitcher"
import LanguageSwitcher from "./LanguageSwitcher"
import { ThemeToggle } from "@/components/theme-toggle";  // 客户端组件
import { useParams } from 'next/navigation';
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    d={props.d}
    {...props}
  />
);

const MenuButton = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className="focus:outline-none flex items-center justify-center mx-2"
    aria-label="Menu"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        d="M 2 2.5 L 20 2.5"
        animate={isOpen ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 2.5 L 20 2.5" }}
        transition={{ duration: 0.3 }}
        strokeWidth="2"
        stroke="#C0CFB2"
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        strokeWidth="2"
        stroke="#C0CFB2"
      />
      <Path
        d="M 2 16.346 L 20 16.346"
        animate={isOpen ? { d: "M 3 2.5 L 17 16.346" } : { d: "M 2 16.346 L 20 16.346" }}
        transition={{ duration: 0.3 }}
        strokeWidth="2"
        stroke="#C0CFB2"
      />
    </svg>
  </button>
);

// const MenuButton = ({ toggle, isOpen }) => (
//   <button
//     onClick={toggle}
//     className="focus:outline-none flex items-center justify-center mx-2"
//     aria-label="Menu"
//   >
//     <svg width="23" height="23" viewBox="0 0 25 25">
//       <motion.path
//         d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
//         transition={{ type: "spring", stiffness: 200, damping: 20 }}
//         strokeWidth="2"
//         stroke="#C0CFB2"
//       />
//       <motion.path
//         d="M 2 9.423 L 20 9.423"
//         animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
//         transition={{ duration: 0.3 }}
//         strokeWidth="2"
//         stroke="#C0CFB2"
//       />
//       <motion.path
//         d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
//         transition={{ type: "spring", stiffness: 200, damping: 20 }}
//         strokeWidth="2"
//         stroke="#C0CFB2"
//       />
//     </svg>

//   </button>
// );


const MobileNavbar = ({ menuItems, mobileMenuOpen, setMobileMenuOpen }) => {
  const params = useParams();
  const currentLocale = params.locale;
  const [currentMenu, setCurrentMenu] = useState('main'); // 控制当前导航级别

  const handleMenuClick = (item) => {
    if (item.dropdownItems) {
      setCurrentMenu(item.label); // 只有有子菜单时才切换到子菜单
    }
  };

  const handleBackClick = () => {
    setCurrentMenu('main'); // 返回主菜单
  };

  return (
    <div className="lg:hidden w-full">
      <div className="flex bg-[#45624E] dark:bg-[#2A3C30] rounded-full h-fit items-center lg:p-3 px-1 min-w-fit mx-2 mt-2">
        <Link href={`/`} className="flex items-center px-2 mx-2">
          <img src="/icons/sampolaLogoGreen.svg" alt="Logo" className="w-14 h-14" />
        </Link>
        <SearchBar />
        <MenuButton
          toggle={() => setMobileMenuOpen(!mobileMenuOpen)} // 点击时通过父组件的 setMobileMenuOpen 控制菜单状态
          isOpen={mobileMenuOpen}
        />
      </div>

      {/* 菜单展开动画 */}
      <motion.div
        initial={{ clipPath: "circle(0px at 90% 40px)" }}
        animate={mobileMenuOpen ? { clipPath: "circle(150% at 90% 40px)" } : { clipPath: "circle(0px at 90% 40px)" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`-z-10 fixed top-0 left-0 w-full min-h-screen bg-[#45624E] p-8 flex flex-col space-y-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className='mt-14 back_button'>
          <button
            onClick={handleBackClick}
            className={`${currentMenu === 'main' ? 'hidden' : 'block'} text-white focus:outline-none absolute z-50 left-8 top-20`}
          >
            <ArrowLeft className="w-8 h-8 text-[#C0CFB2]" strokeWidth={1} />
          </button>
        </div>

        {/* 一级导航 */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {item.dropdownItems.length > 0 ? (
              <button
                className="text-xl text-[#C0CFB2] p-2 rounded-full w-full text-left mb-3"
                onClick={() => handleMenuClick(item)}
              >
                {item.label}
              </button>
            ) : (
              <Link href={item.href} className="text-xl block text-[#C0CFB2] p-2 rounded-full w-full text-left mb-3" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            )}
          </div>
        ))}

        {/* 二级导航 */}
        <AnimatePresence mode="wait">
          {menuItems.map((item) => (
            currentMenu === item.label && (
              <motion.div
                key={item.label}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="absolute top-0 left-0 w-full min-h-screen bg-[#45624E] p-8 "
              >
                <div className='mt-16'>
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="text-xl text-[#C0CFB2] p-2 rounded-full block mb-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 w-full">
          <Separator className="my-2 h-[1px] w-[95%] bg-[#C0CFB2] mx-auto justify-center " />
          <div className="ml-auto flex justify-center items-center rounded-full bg-green h-16 space-x-4 mr-4 p-4">
            <FontSizeSwitcher />
            <LanguageSwitcher currentLocale={currentLocale} />
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
