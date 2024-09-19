"use client"
// 在React组件中
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';

const FontSizeSwitcher = () => {
  const [fontSize, setFontSize] = useState('16px');

  useEffect(() => {
    // 加载时从localStorage获取用户设置的字体大小
    const savedFontSize = localStorage.getItem('fontSize') || '16px';
    document.documentElement.style.setProperty('--font-size', savedFontSize);
    setFontSize(savedFontSize);
  }, []);

  const increaseFontSize = () => {
    const newSize = `${parseInt(fontSize) + 2}px`;
    document.documentElement.style.setProperty('--font-size', newSize);
    localStorage.setItem('fontSize', newSize);
    setFontSize(newSize);
  };

  const decreaseFontSize = () => {
    const newSize = `${parseInt(fontSize) - 2}px`;
    document.documentElement.style.setProperty('--font-size', newSize);
    localStorage.setItem('fontSize', newSize);
    setFontSize(newSize);
  };

  return (
    <div>
      <Button onClick={increaseFontSize} className="bg-green-dark rounded-full hover:bg-green-light text-[#F5F7EE]">
        A+
      </Button>
      <Button onClick={decreaseFontSize} className="bg-green-dark rounded-full hover:bg-green-light text-[#F5F7EE]">
        A-
      </Button>
    </div>
  );
};

export default FontSizeSwitcher;
