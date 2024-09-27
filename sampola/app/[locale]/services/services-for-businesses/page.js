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
      title: 'Internships',
      description:
        'Internships provide individuals, typically students or recent graduates, with the chance to work in a professional environment for a limited period. Interns contribute to daily operations while learning new skills and building connections within the industry.',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
    {
      title: 'Apprenticeships',
      description:
        'Apprenticeships offer hands-on work experience while studying for a professional qualification. This provides individuals with the opportunity to develop practical skills, receive mentorship, and gain valuable experience in a chosen field. Ideal for those entering the workforce or changing careers.',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
    {
      title: 'Job Trials',
      description:
        'Job Trials allow individuals to try out a job for a short period, providing both the employer and the potential employee with a trial run before committing to a formal employment relationship. It is an effective way to assess job fit and performance in a real working environment.',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
    {
      title: 'Supported Employment',
      description:
        'Supported Employment focuses on assisting individuals with disabilities or other barriers to employment in securing and maintaining meaningful jobs. This program offers customized support, including job coaching, workplace accommodations, and skill development to ensure long-term employment success.',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
    {
      title: 'Work Activities',
      description:
        'Work Activities are tailored programs that provide individuals with structured, meaningful daily tasks. These activities are often aimed at those who may not be ready for full employment and focus on skill-building, confidence development, and social engagement.',
      buttonText: 'Apply now',
      imageSrc: '/images/image36.jpg',
    },
    {
      title: 'Job Coaching',
      description:
        'Job Coaching offers personalized support for individuals in various employment phases, from job searching to maintaining employment. Coaches assist with career planning, resume building, interview preparation, and workplace adjustment, ensuring long-term career growth.',
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