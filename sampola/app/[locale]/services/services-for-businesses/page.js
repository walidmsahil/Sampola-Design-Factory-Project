import { Separator } from '@/components/ui/Separator';
import HeroSection from '@/components/HeroSection';
import { getServicesForBusinessesPageData } from '@/lib/api';
import ServiceCard from "@/components/ServiceCard";

export default async function ServicesForBusinesses({ params }) {
  const { locale } = params;

  // Fetch data directly in the server component
  const ServicesForBusinessesPageData = await getServicesForBusinessesPageData(locale);

  const {
    welcomeTitle,
    subtitle,
    ctaButtonText,
    ctaButtonLink,
    backgroundImage,
  } = ServicesForBusinessesPageData;

  const opportunities = [
    {
      title: 'Assembly and packaging work',
      description:
        'Our assembly and packaging services ensure that your products are prepared efficiently and professionally. Let us help streamline your production process and enhance your product presentation!',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
    {
      title: 'Subcontracting work',
      description:
        'Our subcontracting services offer flexible solutions tailored to your project needs. Let us help you manage workloads and meet deadlines while maintaining high standards of service!',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
    {
      title: 'EAN-codes labeling and replacements',
      description:
        'We specialize in EAN code labeling and replacements to ensure your products meet retail standards. Trust us to streamline your inventory management and enhance your product visibility in the market!',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
    {
      title: 'Freight forwarding and deliveries',
      description:
        'We specialize in EAN code labeling and replacements to ensure your products meet retail standards. Trust us to streamline your inventory management and enhance your product visibility in the market!',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
  ];


  return (
    <div className="min-h-screen">
      <HeroSection
        title={welcomeTitle}
        subtitle={subtitle}
        ctaText={ctaButtonText}
        ctaLink={ctaButtonLink}
        backgroundImage={backgroundImage}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12">
          {/* Loop through opportunities with a step of 2 */}
          {opportunities.map((_, index) => {
            // Only render when index is even (step by 2)
            if (index % 2 === 0) {
              return (
                <div key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {/* First ServiceCard */}
                    <ServiceCard
                      title={opportunities[index].title}
                      description={opportunities[index].description}
                      buttonText={opportunities[index].buttonText}
                      imageSrc={opportunities[index].imageSrc}
                    />

                    {/* Second ServiceCard (if it exists) */}
                    {opportunities[index + 1] && (
                      <ServiceCard
                        title={opportunities[index + 1].title}
                        description={opportunities[index + 1].description}
                        buttonText={opportunities[index + 1].buttonText}
                        imageSrc={opportunities[index + 1].imageSrc}
                      />
                    )}
                  </div>

                  {/* Insert Separator after every two ServiceCards except the last two */}
                  {index + 1 < opportunities.length - 1 && (index) % 2 === 0 && (
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