// src/middleware.js
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// 支持的语言和默认语言
const SUPPORTED_LANGUAGES = ['en', 'fi', 'sv'];
const DEFAULT_LANGUAGE = 'en';

export default function middleware(req) {
  const { pathname } = req.nextUrl;  // 获取当前请求的路径

  // 创建国际化中间件
  const intlMiddleware = createMiddleware(routing);

  // 如果路径中已经包含支持的语言代码，继续处理
  if (SUPPORTED_LANGUAGES.some(lang => pathname.startsWith(`/${lang}`))) {
    return intlMiddleware(req);
  }

  // 获取浏览器的语言设置（优先使用浏览器语言）
  const acceptLanguage = req.headers.get('accept-language') || '';
  const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0];

  // 如果浏览器首选语言支持，则使用该语言，否则使用默认语言
  const language = SUPPORTED_LANGUAGES.includes(preferredLanguage)
    ? preferredLanguage
    : DEFAULT_LANGUAGE;

  // 如果 URL 中没有语言前缀且所有语言的 URL 一致，则直接让中间件处理，不需要重定向
  if (pathname === '/') {
    return intlMiddleware(req);  // 主页不需要语言前缀
  }

  // 对于其他路径，仍然处理语言前缀
  return NextResponse.redirect(new URL(`/${language}${pathname}`, req.url));
}

export const config = {
  // 仅匹配这些路径进行国际化处理
  matcher: ['/((?!_next|.*\\..*).*)'], // 不匹配静态资源路径
};
