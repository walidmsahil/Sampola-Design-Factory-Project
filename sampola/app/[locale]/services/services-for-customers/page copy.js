'use client'
import { Separator } from "@/components/ui/Separator";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button"

export default function ServicesForCustomers() {
  return (
    <div className="">
        <HeroSection />
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-primary mb-4 text-center p-6">
          Services for Customers
        </h1>

        <div className="flex w-full justify-center">
          <Separator className="my-4 h-[2px] w-[95%] bg-primary justify-center dark:bg-[#C0CFB2]" />
        </div>

        {/* Upholstery and restoration section */}
        <div className="my-8 p-6">
          <h2 className="text-2xl font-bold text-primary-dark">Upholstery and restoration</h2>
          <p className="mt-4">
          Our services include furniture upholstery and restoration as well as various surface treatment works.
          We also sell high-quality upholstery fabrics and various upholstery accessories. Through the online store you can buy e.g. sea ​​grass, saddle belt and jute fabric.
          </p>
          <p className="mt-2">
          More information about the services of the curtain walling and restoration department:
          </p>
          <p>
            Responsible job coach Kimmo Uschanoff <br/>
            tel. 050 375 0051 <br/>
            kimmo.uschanoff@kpsaatio.fi
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Separator className="my-4 h-[2px] w-[95%] bg-primary justify-center dark:bg-[#C0CFB2]" />
        </div>

        {/* Workshop Shop Sampola */}
        <div className="my-8 p-6">
          <h2 className="text-2xl font-bold text-primary-dark">Workshop shop Sampola</h2>
          <p className="mt-4">
            You can buy high-quality domestic handicrafts from Sampola's online store.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Separator className="my-4 h-[2px] w-[95%] bg-primary justify-center dark:bg-[#C0CFB2]" />
        </div>

        {/* Categories Section */}
        <div className="my-8 p-6">
          <h2 className="text-2xl font-bold text-primary-dark">Categories</h2>
          <div className="flex flex-col space-y-8 mt-6">

            {/* Brushes Category */}
            <div className="flex items-center space-x-6">
            <Image
                src="https://dummyimage.com/600x600/ddd/000.png&text=Placeholder"
                alt="Upholstery accessories"
                width={300}
                height={300}
                className="object-cover rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-primary-dark">Brushes</h3>
                <p className="mt-2">
                Sampola's brushes are handmade. A handmade brush can be recognized by the binding. Thanks to it, 
                the brush gets air after use and cleaning and remains usable for longer. After using the brush, 
                you should dry the bristles downwards.
                </p>
                <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg">
                  More info
                </button>
              </div>
            </div>

            <Separator className="bg-primary-dark h-[2px]" />

            {/* Upholstery Accessories Category */}
            <div className="flex items-center space-x-6">
              <Image
                src="https://dummyimage.com/600x600/ddd/000.png&text=Placeholder"
                alt="Upholstery accessories"
                width={300}
                height={300}
                className="object-cover rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-primary-dark">Upholstery accessories</h3>
                <p className="mt-2">
                Here you can find various upholstery supplies and materials packed in Sampola, 
                also for the needs of private upholsterers and restoration enthusiasts.
                </p>
                <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg">
                  More info
                </button>
              </div>
            </div>

            <Separator className="bg-primary-dark h-[2px]" />

            {/* Wooden Products Category */}
            <div className="flex md:items-center md:flex-row space-x-6 flex-col">
            <Image
                src="https://dummyimage.com/600x600/ddd/000.png&text=Placeholder"
                alt="Upholstery accessories"
                width={300}
                height={300}
                className="object-cover rounded-2xl shadow-lg "
              />
              <div  className="flex flex-col items-center">
                <div className="p-6 mb-4">
                  <h3 className="text-xl font-bold text-primary-dark">Wooden products</h3>
                  <p className="mt-2">
                  Sampola, known for its rich traditions in craftsmanship, is a hub for creating high-quality wooden products. 
                  These products are often handcrafted using domestically sourced wood, 
                  highlighting the region's commitment to sustainability and skilled artisanship.
                  </p>
                </div>
                <Button className="bg-primary-dark rounded-full hover:bg-primary-light text-[#F5F7EE] w-28">
                More info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}