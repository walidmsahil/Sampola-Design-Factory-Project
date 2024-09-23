"use client";

import { Menu, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = ({ menuItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <div className="lg:hidden">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="absolute focus:outline-none right-4 top-4 transition-transform duration-300 ease-in-out"
      >
        <Menu className="w-10 h-10 text-[#f3f2e9] transform rotate-0 transition-transform duration-300 ease-in-out" />
      </button>

      <motion.div
        initial={{ x: "100%" }}
        animate={mobileMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.2, ease: "linear" }}
        className="z-10 fixed top-0 left-0 w-full min-h-screen bg-[#45624E] p-8 flex flex-col space-y-4"
      >
        <div className='mt-10'>
          <button
            onClick={handleBackClick}
            className={`${currentMenu === 'main' ? 'hidden' : 'block'} text-white focus:outline-none fixed z-50 left-4 top-4`} // 如果是主菜单，隐藏返回按钮
          >
            <ArrowLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="fixed focus:outline-none z-50 right-4 top-4"
          >
            <X className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* 一级导航始终保持在页面上 */}
        <motion.div
          initial={{ x: 0 }} // 一级菜单保持不动
          animate={{ x: 0 }}
        >
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.dropdownItems.length > 0 ? (
                <button
                  className="text-[#C0CFB2] p-2 rounded-full w-full text-left"
                  onClick={() => handleMenuClick(item)} // 判断是否进入二级菜单
                >
                  {item.label}
                </button>
              ) : (
                <Link href={item.href} className="block text-[#C0CFB2] p-2 rounded-full w-full text-left" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link> // 没有子菜单时关闭菜单并跳转
              )}
            </div>
          ))}
        </motion.div>

        {/* 二级导航，滑动覆盖到一级导航上 */}
        <AnimatePresence mode="wait">
          {menuItems.map((item) => (
            currentMenu === item.label && (
              <motion.div
                key={item.label}
                initial={{ x: "100%" }} // 二级菜单从右侧滑入
                animate={{ x: 0 }} // 完全展示
                exit={{ x: "100%" }} // 返回时从左侧滑出
                transition={{ duration: 0.2, ease: "linear" }}
                className="absolute top-0 left-0 w-full min-h-screen bg-[#45624E] p-8 "
              >
                <div className='mt-10'>
                {item.dropdownItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className="text-[#C0CFB2] p-2 rounded-full block"
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
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
