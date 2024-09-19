"use client";

import { useRouter, usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher({ currentLocale, availableLocales }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale) => {
    const newPath = pathname.startsWith(`/${currentLocale}`)
      ? pathname.replace(`/${currentLocale}`, `/${locale}`)
      : `/${locale}${pathname}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12 h-12 p-2 flex items-center gap-2 hover:bg-green-light rounded-full bg-green-dark">
          <Globe className="w-6 h-6 text-[#f3f2e9]" />
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
