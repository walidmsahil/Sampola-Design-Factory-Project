"use client";

import { useRouter, usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function LanguageSwitcher({ currentLocale, availableLocales }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale) => {
    const newPath = pathname.startsWith(`/${currentLocale}`)
      ? pathname.replace(`/${currentLocale}`, `/${locale}`)
      : `/${locale}${pathname}`;
    router.push(newPath);
  };

  useEffect(() => {
    const body = document.body;

    const observer = new MutationObserver(() => {
      if (body.getAttribute('data-scroll-locked') === '1') {
        // 移除 `data-scroll-locked`，恢复滚动条
        body.removeAttribute('data-scroll-locked');
      }
    });

    observer.observe(body, {
      attributes: true, // 监听属性变化
      attributeFilter: ['data-scroll-locked'], // 仅监听 `data-scroll-locked` 属性
    });

    return () => {
      observer.disconnect(); // 在组件卸载时清除 observer
    };
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12 h-12 p-2 flex items-center gap-2 text-[#f3f2e9] hover:bg-[#f3f2e9] hover:text-green rounded-full bg-green focus-visible:ring-0">
          <Globe className="w-6 h-6  focus:outline-none" />
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
            {locale === 'en' ? 'English' : locale === 'fi' ? 'Suomi' : locale === 'sv' ? 'Svenska' : '中文'}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
