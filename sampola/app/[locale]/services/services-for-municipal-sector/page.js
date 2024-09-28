// ServicesForMunicipalSector page

import { Separator } from '@/components/ui/Separator';
import HeroSection from '@/components/HeroSection';
import { getServicesForMunicipalSectorPageData } from '@/lib/api';
import ServiceCard from "@/components/ServiceCard";

export default async function ServicesForMunicipalSector({ params }) {
  const { locale } = params;

  // Fetch data directly in the server component
  const ServicesForMunicipalSectorPageData = await getServicesForMunicipalSectorPageData(locale);
  console.log('ServicesForMunicipalSectorPageData', JSON.stringify(ServicesForMunicipalSectorPageData));

  const {
    heroSection,
    servicesSections,
  } = ServicesForMunicipalSectorPageData;

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

      {/* Services Sections */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12">
          {/* Loop through servicesSections with a step of 2 */}
          {servicesSections.map((service, index) => {
            // Only render when index is even (step by 2)
            if (index % 2 === 0) {
              return (
                <div key={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* First ServiceCard */}
                    <ServiceCard
                      title={servicesSections[index].title}
                      description={servicesSections[index].description}
                      buttonText={servicesSections[index].ctaButtonText}
                      imageSrc={servicesSections[index].iconImage}
                    />

                    {/* Second ServiceCard (if it exists) */}
                    {servicesSections[index + 1] && (
                      <ServiceCard
                        title={servicesSections[index + 1].title}
                        description={servicesSections[index + 1].description}
                        buttonText={servicesSections[index + 1].ctaButtonText}
                        imageSrc={servicesSections[index + 1].iconImage}
                      />
                    )}
                  </div>

                  {/* Insert Separator after every two ServiceCards except the last two */}
                  {index + 1 < servicesSections.length - 1 && (index) % 2 === 0 && (
                    <div key={`separator-${index}`} className="flex justify-center">
                      <Separator className="my-10 h-1px] w-[95%] bg-primary justify-center" />
                    </div>
                  )}
                </div>
              );
            }
            return null; // Skip odd indices
          })}
        </div>
      </div>
    </div>
  );
}
