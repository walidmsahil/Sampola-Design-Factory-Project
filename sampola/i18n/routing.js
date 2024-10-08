// src/i18n/routing.js
import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en','fi','sv'],  // 定义支持的语言
  defaultLocale: 'en'     // 默认语言
});


// 导出用来处理路由的工具函数
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
