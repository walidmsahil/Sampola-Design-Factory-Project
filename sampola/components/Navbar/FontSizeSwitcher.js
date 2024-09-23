"use client";

import { useEffect, useState } from 'react';
import { ALargeSmall } from 'lucide-react';  // 替换为实际的图标组件
import { Button } from '@/components/ui/button';

const FontSizeSwitcher = () => {
  const fontSizes = ['18px', '22px', '16px']; // 预设的字体大小：正常、大号、小号
  const [currentIndex, setCurrentIndex] = useState(0);
  const iconSizes = [ 'w-6 h-6','w-8 h-8', 'w-5 h-5'];

  useEffect(() => {
    // 从 localStorage 获取用户设置的字体大小
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      const index = fontSizes.indexOf(savedFontSize);
      if (index !== -1) {
        setCurrentIndex(index);
        document.documentElement.style.setProperty('--font-size', savedFontSize);
      }
    } else {
      // 设置默认字体大小
      document.documentElement.style.setProperty('--font-size', fontSizes[0]);
    }
  }, []);

  const toggleFontSize = () => {
    const nextIndex = (currentIndex + 1) % fontSizes.length;
    const newSize = fontSizes[nextIndex];
    document.documentElement.style.setProperty('--font-size', newSize);
    localStorage.setItem('fontSize', newSize);
    console.log('Font size changed to:', currentIndex);
    setCurrentIndex(nextIndex);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleFontSize}
      className="w-12 h-12 p-2 flex items-center gap-2 text-[#f3f2e9] hover:bg-[#f3f2e9] hover:text-green rounded-full bg-green focus-visible:ring-0"
    >
      <ALargeSmall className={iconSizes[currentIndex]} /> {/* 替换为实际的图标 */}
      <span className="sr-only">Adjust Font Size</span>
    </Button>
  );
};

export default FontSizeSwitcher;
