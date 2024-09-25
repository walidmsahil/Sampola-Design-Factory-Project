"use client";

import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();
  const availableLocales = ["fi", "en", "sv"];
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制菜单的显示/隐藏
  const menuRef = useRef(null); // 新增：定义菜单的引用

  const handleLocaleChange = (locale) => {
    const newPath = pathname.startsWith(`/${currentLocale}`)
      ? pathname.replace(`/${currentLocale}`, `/${locale}`)
      : `/${locale}${pathname}`;
    router.push(newPath);
    setIsMenuOpen(false); // 选择语言后隐藏菜单
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust this breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      if (body.getAttribute("data-scroll-locked") === "1") {
        body.removeAttribute("data-scroll-locked");
      }
    });

    observer.observe(body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // 点击屏幕其他地方时关闭菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  if (isMobile) {
    return (
      <div className="relative w-12 h-12 bg-green" ref={menuRef}> {/* 新增 ref={menuRef} */}
        <Button
          variant="ghost"
          className="w-12 h-12 p-2 flex items-center gap-2 text-[#f3f2e9] hover:bg-[#f3f2e9] hover:text-green rounded-full bg-green focus-visible:ring-0"
          onClick={toggleMenu} // 点击按钮切换菜单显示状态
        >
          <Globe className="w-6 h-6 focus:outline-none" />
        </Button>

        {/* 使用 framer-motion 添加动画 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }} // 保持 x 轴的偏移
              animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}    // 保持 x 轴的偏移
              exit={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}    // 保持 x 轴的偏移
              transition={{ duration: 0.2 }}
              className="absolute -top-16 left-[50%] flex justify-between items-center bg-[#f3f2e9] rounded-xl shadow-lg p-2 w-auto min-w-max"
            >
              <div className="flex space-x-2">
                {availableLocales.map((locale) => (
                  <div
                    key={locale}
                    onClick={() => handleLocaleChange(locale)}
                    className={`px-3 py-2 rounded-full text-sm w-12 text-center cursor-pointer 
                      ${currentLocale === locale ? 'text-green' : 'text-green-light hover:text-green'}`}
                  >
                    {locale.toUpperCase()}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12 h-12 p-2 flex items-center gap-2 text-[#f3f2e9] hover:bg-[#f3f2e9] hover:text-green rounded-full bg-green focus-visible:ring-0">
          <Globe className="w-6 h-6 focus:outline-none" />
          <span className="sr-only">Select Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-green-dark text-white rounded-lg">
        {availableLocales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onSelect={() => handleLocaleChange(locale)}
            className="cursor-pointer"
          >
            {locale === 'en' ? 'English' : locale === 'fi' ? 'Suomi' : 'Svenska'}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
