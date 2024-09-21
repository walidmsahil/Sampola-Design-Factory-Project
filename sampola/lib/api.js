import axios from 'axios';

// 创建 axios 实例并配置 baseURL
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 获取导航数据的 API 函数
export async function getNavData(locale) {
  try {
    // 使用 filters 过滤掉所有有 parent 的导航项，并填充 children
    const res = await apiClient.get(`/api/navigations?filters[parent][$null]=true&populate=children&locale=${locale}`);
    const navData = res.data.data;
    
    return navData.map((item) => ({
      href: `/${locale}/${item.attributes.slug || ''}`,  // 处理可能的空 slug
      label: item.attributes.title || 'Unnamed',        // 处理可能的空 title
      dropdownItems: (item.attributes.children && item.attributes.children.data.length > 0) 
        ? item.attributes.children.data.map((child) => ({
          href: `/${locale}/${item.attributes.slug}/${child.attributes.slug || ''}`, // 处理子菜单的 slug
          label: child.attributes.title || 'Unnamed',      // 处理子菜单的 title
        }))
        : [],  // 如果没有 children，则返回空数组
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



// 获取 core_service_sections 数据的 API 函数
export async function getCoreServiceSectionsData(locale) {
  try {
    // console.log('Fetching Core Service Sections with locale:', locale);
    
    // 从 core_service_sections 直接调取数据，指定语言和图片填充
    const res = await apiClient.get(`/api/core-service-sections?populate=image&locale=${locale}`);
    // 返回 core_service_sections 的数据
    return res.data.data;
  } catch (error) {
    console.error('Error fetching core service sections data:', error);
    return [];
  }
}