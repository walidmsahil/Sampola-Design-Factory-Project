// src/middleware.js
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// 支持的语言和默认语言
const SUPPORTED_LANGUAGES = ['en', 'zh', 'fi', 'sv'];
const DEFAULT_LANGUAGE = 'en';

export default function middleware(req) {
  // 获取当前请求的路径
  const { pathname } = req.nextUrl;

  // 创建国际化中间件
  const intlMiddleware = createMiddleware(routing);
  
  // 如果路径中已经包含语言代码，直接继续处理
  if (SUPPORTED_LANGUAGES.some(lang => pathname.startsWith(`/${lang}`))) {
    return intlMiddleware(req);
  }

  // 获取浏览器的语言设置
  const acceptLanguage = req.headers.get('accept-language') || '';
  const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0];

  // 如果浏览器的首选语言在支持的语言列表中，使用该语言；否则使用默认语言
  const language = SUPPORTED_LANGUAGES.includes(preferredLanguage) ? preferredLanguage : DEFAULT_LANGUAGE;

  // 重定向到带有语言前缀的路径
  return NextResponse.redirect(new URL(`/${language}${pathname}`, req.url));
}

export const config = {
  // 仅匹配这些路径进行国际化处理
  matcher: ['/', '/(en|zh|fi|sv)/:path*'], // 包含所有支持的语言
};
