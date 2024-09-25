'use client';
import { motion } from 'framer-motion'
import { Users, Building, Landmark } from 'lucide-react'
import Link from 'next/link'
const ServiceCard = ({ title, description, icon }) => {

  return (
    <motion.div
      className=" rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="text-primary mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-green">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        </div>
        <div className="flex">
            <Link href={`/services/services-for-businesses`} className="bg-green-dark text-[#F5F7EE] px-6 py-2 rounded-full hover:bg-green-light transition duration-300">
              Learn more
            </Link>
          </div>
      </div>
    </motion.div>
  )
}

export default function Component({services}) {
  return (
      <div className="mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title={services[0].title}
            description={services[0].description}
            icon={<Users className="h-8 w-8 text-green" />}
          />
          <ServiceCard
            title={services[1].title}
            description={services[1].description}
            icon={<Building className="h-8 w-8 text-green" />}
          />
          <ServiceCard
            title={services[2].title}
            description={services[2].description}
            icon={<Landmark className="h-8 w-8 text-green" />}
          />
        </div>
      </div>
  )
}
