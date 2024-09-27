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
    <div className=" rounded-lg overflow-hidden  dark:bg-[#353533] flex flex-start text-center flex-col items-center">
      <div className="flex justify-center p-16 w-full">
        <div className="relative w-full h-96 ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl shadow-lg w-full h-full"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-bold text-primary dark:text-[#C0CFB2] mb-12">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-[#C0CFB2] mb-6">{description}</p>
        <Link href={buttonLink}>
          <span className="bg-[#617968] text-[#F5F7EE] dark:bg-[#C0CFB2] dark:text-[#151515] px-6 py-2 rounded-full hover:bg-[#AABB99] dark:hover:bg-[#C0CFB2] transition duration-300 cursor-pointer inline-block">
            {buttonLabel}
          </span>
        </Link>
      </div>
    </div>
  );
}
