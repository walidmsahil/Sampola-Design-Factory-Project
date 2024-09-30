'use client';

import { Separator } from "@/components/ui/Separator";
import CoreServiceCard from '@/components/CoreServiceCard';
import { motion } from 'framer-motion';

export default function AboutClientSideComponent({ coreServices }) {
  return (
    <section className="mb-16">
      {coreServices.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <CoreServiceCard
            imgLeft={index % 2 === 0}
            title={service.attributes.title}
            description={service.attributes.description}
            imageSrc={`${process.env.NEXT_PUBLIC_API_URL}${service.attributes.image?.data?.attributes?.url || '/default-image.jpg'}`}
            imageAlt={service.attributes.title}
          />
          <div className="flex w-full justify-center">
            <Separator className="my-10 h-1px w-[95%] bg-primary justify-center " />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
