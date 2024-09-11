"use client"; // 标记为客户端组件

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher({ currentLocale, availableLocales }) {
  const router = useRouter();
  const pathname = usePathname(); // 获取当前路径

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;

    // 替换当前路径中的语言部分，并保持其余路径
    const newPath = pathname.startsWith(`/${currentLocale}`)
      ? pathname.replace(`/${currentLocale}`, `/${newLocale}`)
      : `/${newLocale}${pathname}`;

    router.push(newPath); // 跳转到新语言的相同页面
  };

  return (
    <select
      value={currentLocale}
      onChange={handleLocaleChange}
      className="p-2 bg-[#45624E] text-white rounded-full"
    >
      {availableLocales.map(locale => (
        <option key={locale} value={locale}>
          {locale === 'en' ? 'English' : locale === 'fi' ? 'Suomi' : locale === 'sv' ? 'Svenska' : '中文'}
        </option>
      ))}
    </select>
  );
}
