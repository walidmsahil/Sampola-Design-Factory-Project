import Image from 'next/image';
import Link from 'next/link';

//import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';

export default function Home({ params }) {
  const { locale } = params;

  return (
    <div className="bg-[#F5F7EE] min-h-screen">
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 lg:px-8">
          {/* Large Placeholder Section */}
          <section className="large-placeholder my-16 flex justify-center">
            <div className="rounded-lg shadow-md overflow-hidden max-w-[1200px] w-full">
              <Image
                src="https://dummyimage.com/1200x600/ddd/000.png&text=Placeholder"
                alt="Large Placeholder"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>


          {/* Services for Customers Section */}
          <section className="services-customers py-16 bg-white rounded-lg shadow-md mb-8 px-6 lg:px-12">
            <h2 className="text-3xl font-bold mb-8 text-[#45624E]">Services for Customers</h2>
            <p className="mb-8 text-[#151515]">
              Sampola has promoted meaningful work and social responsibility since the 1960s. Today,
              we provide services for individuals with communication needs and businesses requiring
              outsourcing solutions. Our goal is to foster social inclusion and support
              local communities. We serve 1800 monthly - today for the whole summer and its 3,5k.
            </p>
            <div className="flex">
              <Link href={`/${locale}/services`} className="bg-green-dark text-[#F5F7EE] px-6 py-2 rounded-full hover:bg-green-light transition duration-300">
                Online Store
              </Link>
            </div>
          </section>

          {/* Services for Companies Section */}
          <section className="services-companies py-16 bg-white rounded-lg shadow-md mb-8 flex flex-col lg:flex-row items-center px-6 lg:px-12">
            <div className="w-full lg:w-2/3 pr-0    lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-8 text-[#45624E]">Services for Companies</h2>
              <p className="mb-8 text-[#151515]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a eros dictum, malesuada sem at, faucibus elit.
                Morbi sed aliquet. Morbi feugiat nunc vel aliquet. Morbi feugiat
                vehicula. Donec arcu elit, molestie in purus et, interdum mollis
                augue. Sed euismod urna non quam feugiat odio volutpat eget.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link href={`/${locale}/services`} className="bg-green-dark text-[#F5F7EE] px-6 py-2 rounded-full hover:bg-green-light transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="https://dummyimage.com/800x800/ddd/000.png&text=Placeholder"
                  alt="Placeholder"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* Customer Stories Section */}
          <section className="customer-stories py-16 bg-white rounded-lg shadow-md mb-8 flex flex-col lg:flex-row items-center px-6 lg:px-12">
            <div className="w-full lg:w-2/3 pr-0    lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-8 text-[#45624E]">Customer Stories</h2>
              <p className="mb-8 text-[#151515]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a eros dictum, malesuada sem at, faucibus elit.
                Morbi sed aliquet. Morbi feugiat nunc vel aliquet. Morbi feugiat
                vehicula. Donec arcu elit, molestie in purus et, interdum mollis
                augue. Sed euismod urna non quam feugiat odio volutpat eget.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link href={`/${locale}/stories`} className="bg-green-dark text-[#F5F7EE] px-6 py-2 rounded-full hover:bg-green-light transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="https://dummyimage.com/800x800/ddd/000.png&text=Placeholder"
                  alt="Placeholder"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
