"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MenuItem = ({ href, children, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navbar');
  return (
    <div 
      className="menu-item min-w-fit"
      onMouseEnter={() => setIsOpen(true)}  // 悬停时打开菜单
      onMouseLeave={() => setIsOpen(false)} // 离开时关闭菜单
    >
      <Link 
        href={href} 
        className="p-2 text-[#C0CFB2] hover:bg-[#F5F7EE] hover:text-[#151515] rounded-full transition flex items-center"
      >
        {children}
        {dropdownItems && (
          isOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />
        )}
      </Link>
      {dropdownItems && isOpen && (
        <ul className="submenu rounded-md">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="w-max block px-4 py-2 text-sm rounded-full text-[#C0CFB2] hover:bg-[#F5F7EE] hover:text-[#151515] transition"
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Navbar() {
  const availableLocales = ['en', 'zh', 'fi', 'sv'];
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Navbar');

  // 动态获取当前语言
  const locale = availableLocales.find(lang => pathname.includes(`/${lang}`)) || 'en';
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    setSelectedLocale(newLocale);

    // 替换路径中的当前语言为新选择的语言
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const menuItems = [
    { href: `/${selectedLocale}`, label: 'home' },
    { 
      href: `/${selectedLocale}/about`, 
      label: 'about',
      dropdownItems: [
        { href: `/${selectedLocale}/about/history`, label: 'history_mission' },
        { href: `/${selectedLocale}/about/team`, label: 'our_team' },
        { href: `/${selectedLocale}/about/values`, label: 'values' },
      ]
    },
    { 
      href: `/${selectedLocale}/services`, 
      label: 'services',
      dropdownItems: [
        { href: `/${selectedLocale}/services/consumer`, label: 'services_consumer' },
        { href: `/${selectedLocale}/services/business`, label: 'services_business' },
        { href: `/${selectedLocale}/services/wellbeing`, label: 'wellbeing_services' },
      ]
    },
    { 
      href: `/${selectedLocale}/shop`, 
      label: 'shop',
      dropdownItems: [
        { href: `/${selectedLocale}/shop/handmade`, label: 'handmade_products' },
        { href: `/${selectedLocale}/shop/sustainable`, label: 'sustainable_products' },
        { href: `/${selectedLocale}/shop/collaborative`, label: 'collaborative_products' },
      ]
    },
    { href: `/${selectedLocale}/partners`, label: 'partners' },
    { 
      href: `/${selectedLocale}/blog`, 
      label: 'blog_news',
      dropdownItems: [
        { href: `/${selectedLocale}/blog/latest`, label: 'latest_projects' },
        { href: `/${selectedLocale}/blog/success`, label: 'success_stories' },
      ]
    },
    { href: `/${selectedLocale}/contact`, label: 'contact' },
    
  ];
  

  return (
    <nav className="p-4 flex items-center">
      <Link href={`/${selectedLocale}`} className="flex bg-[#45624E] items-center rounded-full mr-2 min-w-14">
        <img src="/icons/sampolaLogoGreen.svg" alt="Logo" className="w-10 h-10 m-2" />
      </Link>

      <div className="flex bg-[#45624E] space-x-6 rounded-full h-14 items-center p-4 min-w-fit">
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.href} dropdownItems={item.dropdownItems}>
            {t(item.label)}
          </MenuItem>
        ))}
      </div>

      <div className="ml-auto">
        <select
          value={selectedLocale}
          // onChange={handleLocaleChange}
          className="p-2 bg-[#45624E] text-white rounded-full"
        >
          <option value="en">English</option>
          <option value="fi">Suomi</option>
          <option value="sv">Svenska</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </nav>
  );
}


