// Navbar.js
import NavbarClient from './NavbarClient'; // 客户端组件
// import { getNavData } from '../../lib/api';

export default async function Navbar({ menuItems, locale }) {
  // const availableLocales = ['en', 'fi', 'sv'];
  // const currentLocale = availableLocales.includes(locale) ? locale : 'en';

  // 获取导航数据
  // const menuItems = await getNavData(currentLocale);

  return (
    <NavbarClient
      menuItems={menuItems}
      currentLocale={locale}
    />
  );
}
