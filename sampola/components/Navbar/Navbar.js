import DesktopNavbar from './DesktopNavbar'; // 客户端组件
import MobileNavbar from './MobileNavbar';   // 客户端组件
import { getNavData } from '../../lib/api';
import LanguageSwitcher from './LanguageSwitcher'; // 引入新的客户端组件语言切换器组件
import FontSizeSwitcher from './FontSizeSwitcher';  // 引入新的客户端组件字体大小切换器组件
import { ThemeToggle } from "@/components/theme-toggle";  // 引入新的客户端组件主题切换器组件
// import SearchBar from '../SearchBar';  // 引入新的客户端组件搜索栏组件
export default async function Navbar({ params: { locale } }) {
  const availableLocales = ['en', 'fi', 'sv'];
  const currentLocale = availableLocales.includes(locale) ? locale : 'en'; // 动态获取 URL 中的语言参数

  // 获取导航数据
  const menuItems = await getNavData(currentLocale);

  return (
    <nav className="items-center flex justify-between z-10">
      {/* 桌面端菜单 */}
      <div className=' absolute top-0 flex justify-between w-full'>
        <div className='pt-4 pl-4 w-full'>
          <div className='flex items-center justify-between w-full'>
            <DesktopNavbar menuItems={menuItems} currentLocale={currentLocale} />  {/* 这里使用客户端组件 */}
            <div className="ml-auto hidden lg:flex items-center  rounded-full bg-green h-16 space-x-4 mr-4 p-4">
              <FontSizeSwitcher />
              <LanguageSwitcher currentLocale={currentLocale} availableLocales={availableLocales} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}

      <MobileNavbar menuItems={menuItems} />  {/* 这里使用客户端组件 */}

      {/* <SearchBar/> */}
      {/* 语言切换器 */}
    </nav>
  );
}
