import { Separator } from "@/components/ui/Separator";
import HeroSection from "@/components/HeroSection";
import { getServicesForCustomersPageData } from '@/lib/api';
import CoreServiceCard from '@/components/CoreServiceCard'
import parse from 'html-react-parser';
import { getTranslations } from 'next-intl/server';

export default async function ServicesForCustomers({ params }) {
  const { locale } = params;

  // Fetch data directly in the server component
  const ServicesForCustomersPageData = await getServicesForCustomersPageData(locale);
  // console.log('ServicesForCustomersPageData', JSON.stringify(ServicesForCustomersPageData));
  const t = await getTranslations('services-for-customers', locale); // Fetch translations on the server

  const {
    heroSection,
    servicesSections,
    service_infos
  } = ServicesForCustomersPageData;
 // 使用 useTranslations 钩子来获取翻译
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
      <div className="container mx-auto px-4">
      {/* Services Info Section */}
      <div className="my-8">
          {service_infos.data.map((info) => (
            <div key={info.id} className="mb-8 p-6 rounded-lg transition-colors duration-300">
              <h2 className="text-4xl font-bold text-primary dark:text-[#C0CFB2]">
                {info.attributes.title}
              </h2>
              <div className="mt-4 text-[16px] lg:text-[20px]">
                {/* Render the markdown content using html-react-parser */}
                {parse(info.attributes.markdown)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center">
          <Separator className="my-4 h-[1px] w-[100%] bg-primary dark:bg-[#C0CFB2]  transition-colors duration-300" />
        </div>



        {/* Categories Section */}
        <div className="my-8 rounded-lg transition-colors duration-300">
          <h2 className="text-4xl ml-6 font-bold text-primary dark:text-[#C0CFB2]">{t('Categories')}</h2>

          <section className="mb-16">
            {servicesSections.map((service, index) => (
              <div key={index}>
                <CoreServiceCard
                  imgLeft={index % 2 === 0} // 根据索引值判断图片位置
                  title={service.title} // 获取 title
                  description={service.description} // 获取 description
                  // 拼接完整的图片 URL
                  imageSrc={`${service.iconImage || '/default-image.jpg'}`}
                  imageAlt={service.title} // 使用 title 作为 alt 文本
                />
                {/* 只有在不是最后一个元素时才显示 Separator */}
                {index < servicesSections.length - 1 && (
                  <div className="flex w-full justify-center">
                    <Separator className="my-10 h-[1px] w-[100%] bg-primary justify-center dark:bg-[#C0CFB2]" />
                  </div>
                )}
              </div>
            ))}
          </section>

        </div>
      </div>
    </div>
  );
}


