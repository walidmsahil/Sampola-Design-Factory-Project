// CoreServiceCard.js
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoreServiceCard({ title, description, imageSrc, imageAlt }) {
  return (
    <Card className="border-0 shadow-none overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Text content */}
        <div className="md:w-1/2 py-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {description}
            </p>
          </CardContent>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 p-6 flex items-center justify-center">
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
