"use client";

import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ALargeSmall } from 'lucide-react';  // 假设 a-large-small 图标名是 Asterisk，替换为实际图标
import { Button } from '@/components/ui/button';

const FontSizeSwitcher = () => {
  const [fontSize, setFontSize] = useState('16px');

  useEffect(() => {
    // 从 localStorage 获取用户设置的字体大小
    const savedFontSize = localStorage.getItem('fontSize') || '16px';
    document.documentElement.style.setProperty('--font-size', savedFontSize);
    setFontSize(savedFontSize);
  }, []);

  const setNewFontSize = (newSize) => {
    document.documentElement.style.setProperty('--font-size', newSize);
    localStorage.setItem('fontSize', newSize);
    setFontSize(newSize);
  };

  const increaseFontSize = () => {
    const newSize = `${parseInt(fontSize) + 2}px`;
    setNewFontSize(newSize);
  };

  const decreaseFontSize = () => {
    const newSize = `${parseInt(fontSize) - 2}px`;
    setNewFontSize(newSize);
  };

  return (
    <div className="-translate-x-16 lg:translate-x-0 transition-transform">
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12 h-12 p-2 flex items-center gap-2 hover:bg-green-light rounded-full bg-green-dark focus-visible:ring-0">
          <ALargeSmall className="w-6 h-6 text-[#f3f2e9]" /> {/* 替换为 a-large-small 图标 */}
          <span className="sr-only">Adjust Font Size</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-green-dark text-white rounded-lg">
        <DropdownMenuItem onSelect={increaseFontSize} className="cursor-pointer">
          A+
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={decreaseFontSize} className="cursor-pointer">
          A-
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    
  );
};

export default FontSizeSwitcher;
