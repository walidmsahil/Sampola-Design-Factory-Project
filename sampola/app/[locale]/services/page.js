import { getHTML } from '@/lib/api';

export default async function Services({ params: { locale } }) {

  // 模拟的服务数据
  const servicesData = {
    en: [
      { id: 1, title: 'Web Development', description: 'Building modern and responsive websites.' },
      { id: 2, title: 'SEO Optimization', description: 'Improving your site ranking on search engines.' },
      { id: 3, title: 'Digital Marketing', description: 'Helping you reach your audience online.' },
    ],
    zh: [
      { id: 1, title: '网站开发', description: '构建现代和响应式网站。' },
      { id: 2, title: 'SEO 优化', description: '提高您的网站在搜索引擎中的排名。' },
      { id: 3, title: '数字营销', description: '帮助您在线上与目标受众建立联系。' },
    ],
  };

  // 根据当前语言获取对应的服务数据
  const currentServices = servicesData[locale] || servicesData.en;

  // 获取 HTML 数据
  const htmlData = await getHTML(locale);
  console.log('htmlData', htmlData);
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">{locale === 'fi' ? '我们的服务' : 'Our Services'}</h1>

      {/* 渲染服务列表 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {currentServices.map((service) => (
          <div key={service.id} className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* 渲染 CKEditor 返回的 HTML */}
      {htmlData && (
        <div
          className="ck-editor-content"
          dangerouslySetInnerHTML={{ __html: htmlData }}
        />
      )}
    </div>
  );
}
