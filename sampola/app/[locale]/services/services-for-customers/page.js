import { Separator } from "@/components/ui/Separator";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button"
import { getServicesForCustomersPageData } from '@/lib/api';
import CoreServiceCard from '@/components/CoreServiceCard'
export default async function ServicesForCustomers({ params }) {
  const { locale } = params;

  // Fetch data directly in the server component
  const ServicesForCustomersPageData = await getServicesForCustomersPageData(locale);
  // console.log('ServicesForCustomersPageData', JSON.stringify(ServicesForCustomersPageData));

  const {
    heroSection,
    servicesSections,
  } = ServicesForCustomersPageData;

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
        {/* Upholstery and restoration section */}
        <div className="my-8 p-6   rounded-lg transition-colors duration-300">
          <h2 className="text-4xl font-bold text-primary dark:text-[#C0CFB2]">Upholstery and restoration</h2>
          <p className="mt-4">
            Our services include furniture upholstery and restoration as well as various surface treatment works.
            We also sell high-quality upholstery fabrics and various upholstery accessories. Through the online store you can buy e.g. sea ​​grass, saddle belt and jute fabric.
          </p>
          <p className="mt-2">
            More information about the services of the curtain walling and restoration department:
          </p>
          <p>
            Responsible job coach Kimmo Uschanoff <br />
            tel. 050 375 0051 <br />
            kimmo.uschanoff@kpsaatio.fi
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Separator className="my-4 h-[1px] w-[100%] bg-primary dark:bg-[#C0CFB2]  transition-colors duration-300" />
        </div>

        {/* Workshop Shop Sampola */}
        <div className="my-8 p-6   rounded-lg transition-colors duration-300">
          <h2 className="text-4xl font-bold text-primary dark:text-[#C0CFB2]">Workshop shop Sampola</h2>
          <p className="mt-4">
            You can buy high-quality domestic handicrafts from Sampola's online store.
          </p>
        </div>

        {/* Categories Section */}
        <div className="my-8 rounded-lg transition-colors duration-300">
          <h2 className="text-4xl ml-6 font-bold text-primary dark:text-[#C0CFB2]">Categories</h2>

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