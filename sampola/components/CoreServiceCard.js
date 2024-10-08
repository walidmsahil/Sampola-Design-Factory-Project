import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CoreServiceCard({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  imgLeft = true, 
  widthRatio = 'two-thirds-one-third' // 默认使用 'two-thirds-one-third'
}) {
  // console.log('CoreServiceCard', imageSrc);
  
  // 宽度比例映射
  const widthMapping = {
    'half-half': {
      textWidthClass: 'md:w-1/2',
      imageWidthClass: 'md:w-1/2'
    },
    'two-thirds-one-third': {
      textWidthClass: 'md:w-2/3',
      imageWidthClass: 'md:w-1/3'
    }
  };

  // 获取选中的宽度比例
  const selectedWidth = widthMapping[widthRatio] || widthMapping['two-thirds-one-third'];

  // 从映射中获取文本和图片区域的宽度
  const { textWidthClass, imageWidthClass } = selectedWidth;

  return (
    <Card className="border-0 shadow-none overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Text content */}
        <div className={`${imgLeft ? `${textWidthClass} xl:order-2` : `${textWidthClass} xl:pr-60`} py-8 md:py-10  lg:px-6 md:px-10 flex flex-col`}>
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-primary dark:text-[#C0CFB2] mb-6 leading-relaxed">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <p className="mb-6 text-lg leading-loose ">
              {description}
            </p>
            <p className="flex justify-start w-full mt-8">
              <Link
                href={`/services/services-for-businesses`}
                className="bg-button-green dark:hover:bg-[#C0CFB2] dark:hover:text-[#151515] text-[#F5F7EE] dark:text-[#C0CFB2] px-8 py-3 rounded-full hover:bg-button-hover transition duration-300 flex items-center justify-center"
              >
                Learn more
              </Link>
            </p>
          </CardContent>
        </div>

        {/* Image */}
        <div className={`${imgLeft ? `xl:order-1 ${imageWidthClass}` : imageWidthClass} lg:p-6 flex items-center justify-center`}>
          <div className="relative w-full h-96">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
