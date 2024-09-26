'use client';
import { Users, Building, Landmark } from 'lucide-react'
import Link from 'next/link'
const ServiceCard = ({ title, description, icon }) => {

  return (
    <div className="p-6 flex flex-col justify-between h-full text-center max-w-[300px]">
      {/* <div className="text-primary mb-4">{icon}</div> */}
      <h3 className="text-3xl font-semibold text-primary dark:text-[#C0CFB2]">{title}</h3>
      <div className="flex justify-center">
        <Link href={`/services/services-for-businesses`} className="bg-primary my-6 text-[#F5F7EE] dark:text-[#C0CFB2] dark:hover:text-[#151515] hover:bg-[#C0CFB2] px-6 py-2 rounded-full hover:bg-primary-light transition duration-300">
          Learn more
        </Link>
      </div>
      <p className="text-[#151515] dark:text-[#F5F7EE] mb-4 line-clamp-2">{description}</p>
    </div>
  )
}

export default function Component({ services }) {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <ServiceCard
          title={services[0].title}
          description={services[0].description}
          icon={<Users className="h-8 w-8 text-primary" />}
        />
        <ServiceCard
          title={services[1].title}
          description={services[1].description}
          icon={<Building className="h-8 w-8 text-primary" />}
        />
        <ServiceCard
          title={services[2].title}
          description={services[2].description}
          icon={<Landmark className="h-8 w-8 text-primary" />}
        />
      </div>
    </div>
  )
}
