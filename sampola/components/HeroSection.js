'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function HeroSection() {
  const params = useParams();
  const locale = params.locale;

  return (
    <div className="bg-[#F7EEEE]">
      <div className="container mx-auto px-4">
        <section className="hero">
          <Image 
            src="/images/sampola_banner1.webp" 
            alt="Welcome to Sampola" 
            layout="responsive"
            width={1200}
            height={600}
            objectFit="cover"
          />
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold mb-4 text-[#45624E]">Welcome to Sampola</h1>
            <p className="text-xl mb-8 text-[#45624E]">We offer local services and quality products</p>
            <Link href={`/${locale}/about`} className="bg-[#45624E] text-white px-6 py-2 rounded-full hover:bg-[#3a4c3d] transition duration-300">
              Learn more
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}