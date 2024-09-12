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

// 获取 HTML 数据的 API 函数
export async function getHTML(locale) {
  console.log('getHTML', locale);
  try {
    // 发送 GET 请求，获取指定 locale 的 tester 数据
    const res = await apiClient.get(
      `/api/tester?fields[0]=html&locale=${locale}`
    );
    console.log('res', res);
    
    // 提取 CKEditor 字段的值
    const ckEditorData = res.data.data?.attributes?.html || null;

    // 返回 CKEditor 内容
    return ckEditorData;
  } catch (error) {
    console.error('Error fetching HTML data:', error);
    return null;
  }
}

// 获取 HTML 数据的 API 函数
export async function getData(locale) {
  console.log('getData', locale);
  try {
    // 发送 GET 请求，获取指定 locale 的 tester 数据
    const res = await apiClient.get(
      `/api/tester?fields[0]=html&locale=${locale}`
    );
    console.log('res', res);
    
    // 提取 CKEditor 字段的值
    const ckEditorData = res.data.data?.attributes?.html || null;

    // 返回 CKEditor 内容
    return ckEditorData;
  } catch (error) {
    console.error('Error fetching HTML data:', error);
    return null;
  }
}
