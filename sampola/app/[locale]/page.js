// app/home/page.js

import ServiceComponent from '@/components/ServiceComponent';
import CoreServiceCard from '@/components/CoreServiceCard';
import HeroSection from '../../components/HeroSection';
import { Separator } from '../../components/ui/Separator';
import { getHomePageData } from '@/lib/api';

export default async function Home({ params }) {
  const { locale } = params;

  // Fetch data directly in the server component
  const homePageData = await getHomePageData(locale);

  const {
    welcomeTitle,
    subtitle,
    ctaButtonText,
    ctaButtonLink,
    backgroundImage,
    services,
    coreServices,
    video
  } = homePageData;

  return (
    <div className=" min-h-screen">
      <HeroSection
        title={welcomeTitle}
        subtitle={subtitle}
        ctaText={ctaButtonText}
        ctaLink={ctaButtonLink}
        backgroundImage={backgroundImage}
        bgColor={'bg-[#F5F7EE] dark:bg-[#111111]'}
        showSeparator={false}
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Large Placeholder Section */}
        <section className="my-16 flex justify-center">
          <div className="rounded-lg shadow-md overflow-hidden max-w-full w-[1300px] h-[400px] md:h-[600px]">
            <video
              src={video}
              controls
              autoPlay
              loop
              muted
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>

        {/* 使用你创建的服务组件 */}
        <ServiceComponent services={services} ctaText={ctaButtonText}/>

        <div className="flex w-full justify-center">
          <Separator className="my-10 h-1px] w-[95%] bg-primary justify-center dark:bg-[#C0CFB2] " />
        </div>

        <section className="mb-16">
          {coreServices.map((service, index) => (
            <div key={index}>
              <CoreServiceCard
                imgLeft={false} // 根据索引值判断图片位置
                title={service.title} // 获取 title
                description={service.description} // 获取 description
                // 拼接完整的图片 URL
                imageSrc={`${process.env.NEXT_PUBLIC_API_URL}${service.image || '/default-image.jpg'}`}
                imageAlt={service.title} // 使用 title 作为 alt 文本
                widthRatio={service.widthRatio} // 传递 widthRatio
              />
              {/* 只有在不是最后一个元素时才显示 Separator */}
              {index < coreServices.length - 1 && (
                <div className="flex w-full justify-center">
                  <Separator className="my-10 h-[1px] w-[95%] bg-primary justify-center dark:bg-[#C0CFB2]" />
                </div>
              )}
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
