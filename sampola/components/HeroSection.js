'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function HeroSection({ title, subtitle, ctaText, ctaLink, backgroundImage }) {
  const params = useParams();
  const locale = params.locale;
  const { theme } = useTheme(); // 获取当前主题

  // 使用 useState 解决水合不匹配问题
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full">
      <section className="hero">
        <div className="relative select-none">
          <div
            className="relative w-full h-[80vw] md:h-[40vw] lg:h-[35vw] xl:h-[30vw]"
            suppressHydrationWarning={true}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${backgroundImage}`}
              alt={title}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* 仅在非dark模式下渲染该背景渐变层 */}
            {isClient && theme !== 'dark' && (
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.1)] backdrop-blur-[0.6px]"></div>
            )}
          </div>
        </div>
        <div className="text-center py-12 bg-[#F5F7EE] dark:bg-[#353533]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary dark:text-[#617968]">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 py-4">
            {subtitle}
          </p>
          <Link
            href={`/${locale}/about`}
            className="bg-primary dark:bg-[#C0CFB2] hover:bg-[#C0CFB2] text-[#F5F7EE] dark:text-[#151515] hover:text-[#151515] px-6 py-2 rounded-full transition duration-300 select-none"
          >
            Learn more
          </Link>
        </div>
      </section>
    </div>
  );
}
