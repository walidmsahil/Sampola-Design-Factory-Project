import axios from 'axios';

// 创建 axios 实例并配置 baseURL
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 获取导航数据的 API 函数
export async function getNavData(locale) {
  try {
    const res = await apiClient.get(`/api/navigations?populate=*&locale=${locale}`);
    const navData = res.data.data;

    return navData.map((item) => ({
      href: `/${locale}/${item.attributes.slug}`,
      label: item.attributes.title,
      dropdownItems: item.attributes.children ? item.attributes.children.map((child) => ({
        href: `/${locale}/${child.slug}`,
        label: child.title,
      })) : [],
    }));
  } catch (error) {
    console.error('Error fetching navigation data:', error);
    return [];
  }
}
