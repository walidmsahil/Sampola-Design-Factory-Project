"use client";  // 客户端组件

import { useEffect } from 'react';
import NProgress from 'nprogress'; // 引入 nprogress
import 'nprogress/nprogress.css'; // 引入 nprogress 样式
import { usePathname } from 'next/navigation'; // 使用 usePathname 来监听路径变化

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // 获取当前路径

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleComplete = () => {
      // 设置一个小延迟，使得加载条有时间展示出来
      setTimeout(() => {
        NProgress.done();
      }, 300); // 300ms 延迟
    };

    handleStart(); // 页面加载时启动 nprogress
    handleComplete(); // 页面加载完成时停止 nprogress

    // 当路径变化时，重启 nprogress
    if (pathname) {
      handleStart();
      handleComplete();
    }
  }, [pathname]); // 路径变化时触发 useEffect

  return <>{children}</>;
}
