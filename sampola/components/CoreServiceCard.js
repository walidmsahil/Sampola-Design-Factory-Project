// CoreServiceCard.js
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

export default function CoreServiceCard({ title, description, imageSrc, imageAlt, imgLeft = true }) {
  return (
    <Card className="border-0 shadow-none overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Text content */}
        <div className={`${imgLeft ? 'md:w-2/3 order-2':'md:w-2/3'} py-6`}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {description}
            </p>
            <p className="flex justify-center w-full mt-8">
            <Button className="bg-green-dark rounded-full hover:bg-green-light text-[#F5F7EE] w-28">
            More info
            </Button>
            </p>
            
          </CardContent>
        </div>
        
        {/* Image */}
        <div className={`${imgLeft?'order-1 md:w-1/3':'md:w-1/3'} p-6 flex items-center justify-center -z-10`}>
          <div className="relative w-96 h-96">
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
