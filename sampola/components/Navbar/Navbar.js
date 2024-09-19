import DesktopNavbar from './DesktopNavbar'; // 客户端组件
import MobileNavbar from './MobileNavbar';   // 客户端组件
import Link from 'next/link';
import { getNavData } from '../../lib/api';
import LanguageSwitcher from './LanguageSwitcher'; // 引入新的客户端组件语言切换器组件
import FontSizeSwitcher from './FontSizeSwitcher';  // 引入新的客户端组件字体大小切换器组件
export default async function Navbar({ params: { locale } }) {
  const availableLocales = ['en', 'fi', 'sv'];
  const currentLocale = availableLocales.includes(locale) ? locale : 'en'; // 动态获取 URL 中的语言参数

  // 获取导航数据
  const menuItems = await getNavData(currentLocale);

  return (
    <nav className="p-4 flex items-center relative justify-between">
      {/* Logo */}
      <Link href={`/${currentLocale}`} className="flex bg-[#45624E] items-center rounded-full mr-2 min-w-14">
        <img src="/icons/sampolaLogoGreen.svg" alt="Logo" className="w-10 h-10 m-2" />
      </Link>

      {/* 桌面端菜单 */}
      <DesktopNavbar menuItems={menuItems} />  {/* 这里使用客户端组件 */}

      {/* 移动端菜单 */}
      
      <MobileNavbar menuItems={menuItems} />  {/* 这里使用客户端组件 */}

      {/* 语言切换器 */}
      <div className="ml-auto hidden lg:block">
        <LanguageSwitcher currentLocale={currentLocale} availableLocales={availableLocales} /> {/* 这里使用客户端组件 */}
      </div>

      <FontSizeSwitcher />
    </nav>
  );
}
