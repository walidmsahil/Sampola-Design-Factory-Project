import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt = "Service Image",
  buttonLabel = "Learn more",
  buttonLink = "#",
}) {
  return (
    <div className="rounded-lg overflow-hidden  flex flex-col items-center text-center">
      <div className="w-full p-4 md:p-0 xl:p-16 lg:p-8">
        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[450px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center p-4 md:p-6">
        <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-[#C0CFB2] mb-6 md:mb-12">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-700 dark:text-[#F5F7EE] mb-4 md:mb-6">
          {description}
        </p>
        <Link href={buttonLink} className="bg-[#617968] dark:hover:bg-[#242423] dark:hover:text-[#C0CFB2] text-[#F5F7EE] dark:bg-[#C0CFB2] dark:text-[#151515] px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-[#AABB99] transition duration-300 cursor-pointer">
            {buttonLabel}
        </Link>
      </div> */}
      <div className="flex flex-col items-center justify-center p-4 md:p-6 h-full">
  <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-[#C0CFB2] mb-6 md:mb-12">
    {title}
  </h3>
  <p className="text-sm md:text-base text-gray-700 dark:text-[#F5F7EE] mb-4 md:mb-6 flex-grow">
    {description}
  </p>
  <Link href={buttonLink} className="bg-[#617968] dark:hover:bg-[#242423] dark:hover:text-[#C0CFB2] text-[#F5F7EE] dark:bg-[#C0CFB2] dark:text-[#151515] px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-[#AABB99] transition duration-300 cursor-pointer">
    {buttonLabel}
  </Link>
</div>

    </div>
  );
}
