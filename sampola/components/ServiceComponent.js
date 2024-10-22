'use client';
import { Users, Building, Landmark } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// ServiceCard 组件，添加默认值，避免 title 和 description 为空
const ServiceCard = ({ title = "Service Title", description = "Description not available", icon, ctaText = "Learn more", link}) => {
  return (
    <div className="p-6 flex flex-col justify-between h-full text-center max-w-[300px]">
      <h3 className="text-3xl font-semibold text-primary dark:text-[#C0CFB2]">
        {title}
      </h3>
      <div className="flex justify-center">
        <Link
          href={link}
          className="bg-primary my-6 text-[#F5F7EE] dark:text-[#C0CFB2] dark:hover:text-[#151515] hover:bg-[#C0CFB2] px-6 py-2 rounded-full hover:bg-primary-light transition duration-300"
        >
          {ctaText}
        </Link>
      </div>
      <p className="text-[#151515] dark:text-[#F5F7EE] mb-4 line-clamp-2">
        {description}
      </p>
    </div>
  );
};

// Component 主组件，防止 services 数组为空或长度不足时崩溃
export default function Component({ services = [], ctaText="Learn more" }) {
  const pathname = usePathname();
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {services.length > 0 && (
          <ServiceCard
            title={services[0]?.title || 'Default Title 1'}
            description={services[0]?.description || 'No description available'}
            icon={<Users className="h-8 w-8 text-primary" />}
            ctaText={ctaText || 'Learn more'}
            link={`${pathname}/services/services-for-businesses`}
          />
        )}
        {services.length > 1 && (
          <ServiceCard
            title={services[1]?.title || 'Default Title 2'}
            description={services[1]?.description || 'No description available'}
            icon={<Building className="h-8 w-8 text-primary" />}
            ctaText={ctaText || 'Learn more'}
            link={`${pathname}/services/services-for-municipal-sector`}
          />
        )}
        {services.length > 2 && (
          <ServiceCard
            title={services[2]?.title || 'Default Title 3'}
            description={services[2]?.description || 'No description available'}
            icon={<Landmark className="h-8 w-8 text-primary" />}
            ctaText={ctaText || 'Learn more'}
            link={`${pathname}/services/services-for-customers`}
          />
        )}
      </div>
    </div>
  );
}
