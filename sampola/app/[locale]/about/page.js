import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getCoreServiceSectionsData, getAboutTabsData, getServicesForAboutPageData } from '@/lib/api';
import HeroSection from '@/components/HeroSection';
import Faq from '@/components/Faq';
import Carousel from '@/components/Carousel/Carousel';
import AboutClientSideComponent from '@/components/AboutClientSideComponent'; // 导入新的客户端组件

export default async function ServicesForAbout({ params: { locale } }) {
  // 在服务端获取数据
  const services = await getCoreServiceSectionsData(locale);
  const ServicesForAboutPageData = await getServicesForAboutPageData(locale);
  const aboutTabsData = await getAboutTabsData(locale); // 获取 about_tabs 数据
  
  const { heroSection, servicesSections, faqs, btn_1, title_2, title_3 } = ServicesForAboutPageData;

  // 使用从 API 获取的 about_tabs 数据替换假数据
  const tabsData = aboutTabsData.map((tab) => ({
    value: tab.title.replace(/\s+/g, '-').toLowerCase(), // 根据标题生成 value
    label: tab.title,
    content: (
      <>
        {/* 判断是否有多张图片，如果是则使用 Carousel，否则显示单张图片 */}
        {tab.images.length > 1 ? (
          <Carousel images={tab.images} /> // 使用 Carousel 组件显示多张图片
        ) : (
          <Image
            src={tab.images[0]}
            alt={tab.title}
            width={1500}
            height={300}
            className="mb-4 rounded-lg"
          />
        )}
        <h2 className="text-3xl font-bold mb-4 text-primary dark:text-[#C0CFB2]">{tab.subTitle}</h2>
        <p className="text-lg mb-4">{tab.description}</p>
      </>
    ),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={heroSection.welcomeTitle}
        subtitle={heroSection.subtitle}
        ctaText={heroSection.ctaButtonText}
        ctaLink={heroSection.ctaButtonLink}
        backgroundImage={heroSection.backgroundImage}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <Tabs defaultValue={tabsData[0].value}>
          <TabsList className="flex w-full justify-between bg-transparent flex-wrap">
            {tabsData.map((tab, index) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-primary-dark flex-grow data-[state=active]:border-primary-dark hover:text-primary-dark data-[state=active]:text-primary-dark"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mb-16 p-6">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>

        {/* 加入客户端的部分 */}
        <AboutClientSideComponent coreServices={services} />

        <Faq faqItems={faqs} btn={btn_1} title={title_2} />

        {/* Success Stories Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-[#C0CFB2]">{title_3}</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesSections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <Image
                  src={section.iconImage} // Dynamically use the icon image
                  alt={section.title}
                  width={400}
                  height={250}
                  className="w-full md:h-72 h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-[#C0CFB2] text-primary">
                    {section.title}
                  </h3>
                  <p className="mb-4">
                    {section.description}
                  </p>
                  <Link href={section.ctaButtonLink} className="text-primary dark:text-[#C0CFB2] hover:underline">
                    {section.ctaButtonText || 'Read More'}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
