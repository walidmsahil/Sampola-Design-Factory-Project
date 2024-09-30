import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { getCoreServiceSectionsData } from '@/lib/api'; 
import HeroSection from '@/components/HeroSection';
import Faq from '@/components/Faq';
import Carousel from '@/components/Carousel/Carousel';
import { getServicesForAboutPageData } from '@/lib/api';
import AboutClientSideComponent from '@/components/AboutClientSideComponent'; // 导入新的客户端组件

export default async function ServicesForAbout({ params: { locale } }) {
  // 在服务端获取数据
  const services = await getCoreServiceSectionsData(locale);
  const ServicesForAboutPageData = await getServicesForAboutPageData(locale);

  const { heroSection } = ServicesForAboutPageData;

  const successStoriesData = [
    {
      title: 'Work Support in the Community',
      description: 'With Sampola\'s help, many individuals with disabilities have found meaningful work, boosting their confidence and improving their lives.',
      imageSrc: '/images/image18.webp',
      imageAlt: 'Success story 1',
      link: '#'
    },
    {
      title: 'Success in Recycling Projects',
      description: 'Sampola\'s recycling projects have transformed old advertising materials into eco-friendly products, earning praise from businesses and the community.',
      imageSrc: '/images/image35.jpeg',
      imageAlt: 'Success story 2',
      link: '#'
    },
    {
      title: 'Outsourcing Services for Businesses',
      description: 'Through partnerships with local businesses, Sampola provides high-quality outsourcing services that help companies save costs while meeting their social responsibility commitments.',
      imageSrc: '/images/image17.png',
      imageAlt: 'Success story 3',
      link: '#'
    }
  ];
  
  // 假数据数组，用于简化组件内容管理
  const tabsData = [
    {
      value: "sampola",
      label: "Our Mission",
      content: (
        <>
          <Image
            src="/images/about_banner (1).webp"
            alt="Work and community support"
            width={1500}
            height={300}
            className="mb-4 rounded-lg"
          />
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-[#C0CFB2]">Supporting Communities, Empowering Work</h2>
          <p className="text-lg mb-4">
            Sampola is a non-profit organization committed to providing job opportunities and social support to people with special needs.
            Our vision is to create an inclusive society where everyone can improve their quality of life through meaningful work and gain social recognition and respect.
          </p>
          <p className="text-lg mb-4">
            Our mission is to create employment opportunities, provide training, and promote environmental projects to help people with disabilities and marginalized groups
            integrate into society and enhance their self-confidence. We collaborate with businesses and the government to advance social responsibility initiatives and foster sustainability.
          </p>
        </>
      ),
    },
    {
      value: "services",
      label: "Core Services",
      content: (
        <>
          <Image
            src="/images/sampola_banner3.webp"
            alt="Work and community support"
            width={1500}
            height={300}
            className="mb-4 rounded-lg"
          />
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-[#C0CFB2]">Empowering Communities through Work</h2>
          <p className="text-lg mb-4">
            At Sampola, we provide three primary services to support communities and individuals with special needs:
          </p>
          <p className="text-lg mb-4">
            <strong>Work and Community Support:</strong> We offer personalized job placement services, ensuring individuals with disabilities can find meaningful work suited to their abilities, improving their quality of life.
          </p>
          <p className="text-lg mb-4">
            <strong>Recycling and Sustainability:</strong> Our recycling initiatives transform discarded materials into eco-friendly products, creating jobs and reducing environmental waste.
          </p>
          <p className="text-lg mb-4">
            <strong>Business Outsourcing Services:</strong> We partner with businesses to provide cost-effective outsourcing services such as packaging, assembly, and more, helping companies fulfill their social responsibility commitments.
          </p>
        </>
      ),
    },
    {
      value: "partners",
      label: "Partners",
      content: (
        <>
          <Carousel />
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-[#C0CFB2]">Building a Better Future Together</h2>
          <p className="text-lg mb-4">
            Sampola works with a wide range of local and international partners who share our commitment to social responsibility and sustainability.
            Together, we create meaningful work opportunities, foster social integration, and promote environmentally friendly practices.
          </p>
          <p className="text-lg mb-4">
            Our partners come from various industries, helping us expand our impact by offering resources, collaborations, and support for our mission.
            With their contributions, we are able to provide job opportunities for individuals in need while making a positive environmental impact.
          </p>
        </>
      ),
    },
    {
      value: "impact",
      label: "Social Impact",
      content: (
        <>
          <Image
            src="/images/image4.png"
            alt="Work and community support"
            width={1500}
            height={300}
            className="mb-4 rounded-lg max-h-[482px] object-cover"
          />
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-[#C0CFB2]">Making a Difference, One Life at a Time</h2>
          <p className="text-lg mb-4">
            At Sampola, we believe in the transformative power of work. Through our programs, we have helped hundreds of individuals with disabilities gain employment,
            find a sense of purpose, and build confidence. Our recycling and sustainability projects further extend our impact by promoting environmental responsibility.
          </p>
          <p className="text-lg mb-4">
            Our social impact can be seen in the lives we have changed and the communities we have supported. Every job opportunity we create and every product we recycle
            brings us closer to a more inclusive and sustainable society.
          </p>
        </>
      ),
    },
    {
      value: "about",
      label: "Our Story",
      content: (
        <>
          <Image
            src="/images/sampola_banner4.webp"
            alt="Work and community support"
            width={1500}
            height={300}
            className="mb-4 rounded-lg"
          />
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-[#C0CFB2]">Our Story and Vision</h2>
          <p className="text-lg mb-4">
            Sampola was founded in the 1960s with the goal of creating meaningful employment opportunities for individuals with disabilities and those in need of special support.
            Over the decades, we have grown into a comprehensive organization that not only provides job opportunities but also promotes sustainability through various recycling initiatives.
          </p>
          <p className="text-lg mb-4">
            Our vision is to create a world where work is accessible to everyone, and communities are built on the principles of inclusion and sustainability.
            We strive to integrate individuals into the workforce, helping them lead fulfilling lives while contributing to a healthier planet.
          </p>
        </>
      ),
    },
  ];

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
        <Tabs defaultValue="sampola">
          <TabsList className="flex w-full justify-between bg-transparent flex-wrap">
            {tabsData.map((tab, index) => (
              <>
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-primary-dark flex-grow data-[state=active]:border-primary-dark hover:text-primary-dark data-[state=active]:text-primary-dark"
                >
                  {tab.label}
                </TabsTrigger>
              </>
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
        
        <Faq />
      </div>
    </div>
  );
}
