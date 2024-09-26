'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function HeroSection() {
  const params = useParams();
  const locale = params.locale;

  return (
    <div className="w-full">
      <section className="hero ">
        <div className="relative select-none">
          {/* 使用动态的高度，屏幕越宽，高度越大 */}
          <div className="relative w-full h-[80vw] md:h-[40vw] lg:h-[35vw] xl:h-[30vw]"> {/* 使用vw来动态控制高度 */}
          <Image
            src="/images/feeling (12).jpg"
            alt="Welcome to Sampola"
            fill // 等效于 layout="fill"
            style={{ objectFit: 'cover', objectPosition: 'center' }} // 使用 style 替代 objectFit 和 objectPosition
          />

            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.55)] to-[rgba(255,255,255,0.1)] backdrop-blur-[0.6px]"></div>
          </div>
        </div>
        <div className="text-center py-12 bg-[#F5F7EE] dark:bg-[#353533]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary dark:text-[#617968]">
            Welcome to Sampola
          </h1>
          <p className="text-lg md:text-xl mb-8 py-4">
            We offer local services and quality products
          </p>
          <Link
            href={`/${locale}/about`}
            className="bg-primary dark:bg-[#C0CFB2] hover:bg-[#C0CFB2] text-[#F5F7EE] dark:text-[#151515] hover:text-[#151515] px-6 py-2 rounded-full  transition duration-300 select-none"
          >
            Learn more
          </Link>
        </div>

      </section>
    </div>
  );
}
