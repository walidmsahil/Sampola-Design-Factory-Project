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

    // 对主导航项进行排序
    const sortedNavData = navData
      .map((item) => ({
        // href: `/${locale}/${item.attributes.slug || ''}`,  // 处理可能的空 slug
        href: `${(item.attributes.children&&item.attributes.children.data.length>0)?`/${locale}/${item.attributes.slug}/${item.attributes.children.data[0].attributes.slug}`:`/${locale}/${item.attributes.slug || ''}`}`,  // 处理可能的空 slug
        label: item.attributes.title || 'Unnamed',        // 处理可能的空 title
        order: item.attributes.order || 0,                // 处理可能的空 order
        dropdownItems: (item.attributes.children && item.attributes.children.data.length > 0)
          ? item.attributes.children.data.map((child) => ({
              href: `/${locale}/${item.attributes.slug}/${child.attributes.slug || ''}`, // 处理子菜单的 slug
              label: child.attributes.title || 'Unnamed',      // 处理子菜单的 title
              order: child.attributes.order || 0,              // 处理子菜单的 order
            }))
          : [],  // 如果没有 children，则返回空数组
      }))
      .sort((a, b) => a.order - b.order);  // 按 order 字段排序

    // 对子导航项（dropdownItems）进行排序，并且移除 order 字段
    return sortedNavData.map((item) => ({
      href: item.href,
      label: item.label,
      dropdownItems: item.dropdownItems
        .sort((a, b) => a.order - b.order)  // 对 dropdownItems 按 order 排序
        .map(({ order, ...rest }) => rest), // 删除 order 字段
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
export async function getHomePageData(locale) {
  try {
    const res = await apiClient.get(`http://localhost:1337/api/home-page?locale=${locale}&populate[hero_section][populate]=*&populate[services_sections]=*&populate[core_service_sections][populate]=*`);
    const data = res.data.data?.attributes || {};

    // 解构出所需字段，并为每个字段提供默认值
    const { hero_section, services_sections,core_service_sections } = data;
    
    // 将数据整理为一个干净的对象返回
    return {
      welcomeTitle: hero_section?.data?.attributes?.welcome_title || '',
      subtitle: hero_section?.data?.attributes?.subtitle || '',
      ctaButtonText: hero_section?.data?.attributes?.cta_button_text || '',
      ctaButtonLink: hero_section?.data?.attributes?.cta_button_link || '',
      backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${hero_section?.data?.attributes?.background_image?.data?.attributes?.url || '/default-image.jpg'}`,
      services: services_sections?.data.map(service => ({
        id: service.id,
        title: service.attributes?.service_title || '',
        description: service.attributes?.description || '',
        ctaButtonText: service.attributes?.cta_button_text || '',
        ctaButtonLink: service.attributes?.cta_button_link || ''
      })) || [],
      coreServices: core_service_sections?.data.map(coreService => ({
        id: coreService.id,
        title: coreService.attributes?.title || '',
        description: coreService.attributes?.description || '',
        image: coreService.attributes?.image?.data?.attributes?.url || '/default-image.jpg',
        widthRatio: coreService.attributes?.widthRatio,
      })) || []
    };
  } catch (error) {
    console.error('Error fetching core home page data:', error);
    return {};
  }
}

export async function getServicesForMunicipalSectorPageData(locale) {
  try {
    const res = await apiClient.get(`http://localhost:1337/api/services-for-municipal-sector-page?populate[hero_section][populate]=*&populate[services_sections][populate]=icon_img&locale=${locale}`);
    const data = res.data.data?.attributes || {};

    // 解构 hero_section 数据
    const { hero_section, services_sections } = data;

    // 处理 hero_section 数据
    const heroSection = {
      welcomeTitle: hero_section?.data?.attributes?.welcome_title || '',
      subtitle: hero_section?.data?.attributes?.subtitle || '',
      ctaButtonText: hero_section?.data?.attributes?.cta_button_text || '',
      ctaButtonLink: hero_section?.data?.attributes?.cta_button_link || '',
      backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${hero_section?.data?.attributes?.background_image?.data?.attributes?.url || '/default-image.jpg'}`,
    };


    // 处理 services_sections 数据
    const servicesSections = services_sections?.data?.map((section) => ({
      title: section?.attributes?.service_title || '',
      description: section?.attributes?.description || '',
      iconText: section?.attributes?.icon_text || '',
      ctaButtonText: section?.attributes?.cta_button_text || '',
      ctaButtonLink: section?.attributes?.cta_button_link || '',
      pageUrl: section?.attributes?.page_url || '',
      order: section?.attributes?.order || 0,
      iconImage: `${process.env.NEXT_PUBLIC_API_URL}${section?.attributes?.icon_img?.data?.attributes?.formats?.medium?.url || 
                 section?.attributes?.icon_img?.data?.attributes?.formats?.thumbnail?.url || 
                 '/default-icon.jpg'}`,
    })) || [];

    // 返回整理后的数据
    return {
      heroSection,
      servicesSections,
    };
  } catch (error) {
    console.error('Error fetching Services for Municipal Sector page data:', error);
    return {
      heroSection: {},
      servicesSections: [],
    };
  }
}



export async function getServicesForBusinessesPageData(locale) {
  try {
    const res = await apiClient.get(`http://localhost:1337/api/services-for-businesses-page?populate[hero_section][populate]=*&populate[services_sections][populate]=icon_img&locale=${locale}`);
    const data = res.data.data?.attributes || {};

    // 解构 hero_section 数据
    const { hero_section, services_sections } = data;

    // 处理 hero_section 数据
    const heroSection = {
      welcomeTitle: hero_section?.data?.attributes?.welcome_title || '',
      subtitle: hero_section?.data?.attributes?.subtitle || '',
      ctaButtonText: hero_section?.data?.attributes?.cta_button_text || '',
      ctaButtonLink: hero_section?.data?.attributes?.cta_button_link || '',
      backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${hero_section?.data?.attributes?.background_image?.data?.attributes?.url || '/default-image.jpg'}`,
    };


    // 处理 services_sections 数据
    const servicesSections = services_sections?.data?.map((section) => ({
      title: section?.attributes?.service_title || '',
      description: section?.attributes?.description || '',
      iconText: section?.attributes?.icon_text || '',
      ctaButtonText: section?.attributes?.cta_button_text || '',
      ctaButtonLink: section?.attributes?.cta_button_link || '',
      pageUrl: section?.attributes?.page_url || '',
      order: section?.attributes?.order || 0,
      iconImage: `${process.env.NEXT_PUBLIC_API_URL}${section?.attributes?.icon_img?.data?.attributes?.formats?.medium?.url || 
                 section?.attributes?.icon_img?.data?.attributes?.formats?.thumbnail?.url || 
                 '/default-icon.jpg'}`,
    })) || [];

    // 返回整理后的数据
    return {
      heroSection,
      servicesSections,
    };
  } catch (error) {
    console.error('Error fetching Services for Municipal Sector page data:', error);
    return {
      heroSection: {},
      servicesSections: [],
    };
  }
}

export async function getServicesForAboutPageData(locale) {
  try {
    const res = await apiClient.get(`http://localhost:1337/api/about?populate[hero_section][populate]=*&populate[core-service-sections][populate]=image&locale=${locale}`);
    const data = res.data.data?.attributes || {};

    // 解构 hero_section 数据
    const { hero_section, services_sections } = data;

    // 处理 hero_section 数据
    const heroSection = {
      welcomeTitle: hero_section?.data?.attributes?.welcome_title || '',
      subtitle: hero_section?.data?.attributes?.subtitle || '',
      ctaButtonText: hero_section?.data?.attributes?.cta_button_text || '',
      ctaButtonLink: hero_section?.data?.attributes?.cta_button_link || '',
      backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${hero_section?.data?.attributes?.background_image?.data?.attributes?.url || '/default-image.jpg'}`,
    };


    // 处理 services_sections 数据
    const servicesSections = services_sections?.data?.map((section) => ({
      title: section?.attributes?.service_title || '',
      description: section?.attributes?.description || '',
      iconText: section?.attributes?.icon_text || '',
      ctaButtonText: section?.attributes?.cta_button_text || '',
      ctaButtonLink: section?.attributes?.cta_button_link || '',
      pageUrl: section?.attributes?.page_url || '',
      order: section?.attributes?.order || 0,
      iconImage: `${process.env.NEXT_PUBLIC_API_URL}${section?.attributes?.icon_img?.data?.attributes?.formats?.medium?.url || 
                 section?.attributes?.icon_img?.data?.attributes?.formats?.thumbnail?.url || 
                 '/default-icon.jpg'}`,
    })) || [];

    // 返回整理后的数据
    return {
      heroSection,
      servicesSections,
    };
  } catch (error) {
    console.error('Error fetching Services for Municipal Sector page data:', error);
    return {
      heroSection: {},
      servicesSections: [],
    };
  }
}


export async function getServicesForCustomersPageData(locale) {
  try {
    const res = await apiClient.get(`http://localhost:1337/api/services-for-customers-page?populate[hero_section][populate]=*&populate[services_sections][populate]=icon_img&locale=${locale}`);
    const data = res.data.data?.attributes || {};

    // 解构 hero_section 数据
    const { hero_section, services_sections } = data;

    // 处理 hero_section 数据
    const heroSection = {
      welcomeTitle: hero_section?.data?.attributes?.welcome_title || '',
      subtitle: hero_section?.data?.attributes?.subtitle || '',
      ctaButtonText: hero_section?.data?.attributes?.cta_button_text || '',
      ctaButtonLink: hero_section?.data?.attributes?.cta_button_link || '',
      backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${hero_section?.data?.attributes?.background_image?.data?.attributes?.url || '/default-image.jpg'}`,
    };


    // 处理 services_sections 数据
    const servicesSections = services_sections?.data?.map((section) => ({
      title: section?.attributes?.service_title || '',
      description: section?.attributes?.description || '',
      iconText: section?.attributes?.icon_text || '',
      ctaButtonText: section?.attributes?.cta_button_text || '',
      ctaButtonLink: section?.attributes?.cta_button_link || '',
      pageUrl: section?.attributes?.page_url || '',
      order: section?.attributes?.order || 0,
      iconImage: `${process.env.NEXT_PUBLIC_API_URL}${section?.attributes?.icon_img?.data?.attributes?.formats?.medium?.url || 
                 section?.attributes?.icon_img?.data?.attributes?.formats?.thumbnail?.url || 
                 '/default-icon.jpg'}`,
    })) || [];

    // 返回整理后的数据
    return {
      heroSection,
      servicesSections,
    };
  } catch (error) {
    console.error('Error fetching Services for Municipal Sector page data:', error);
    return {
      heroSection: {},
      servicesSections: [],
    };
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