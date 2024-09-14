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
        <div className="container mx-auto px-4">
          <section className="large-placeholder my-16 flex justify-center">
            <div className="bg-[#D9D9D9] h-64 w-3/4 rounded-lg shadow-md"></div>
          </section>

          <section className="services-customers py-16 bg-white rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold mb-8 text-[#45624E] text-center">Services for Customers</h2>
            <p className="mb-8 text-[#151515] text-center px-8">
              Sampola has promoted meaningful work and social responsibility since the 1960s. Today,
              we provide services for individuals with communication needs and businesses requiring
              outsourcing solutions. Our goal is to foster social inclusion and support
              local communities. We serve 1800 monthly - today for the whole summer and its 3,5k.
            </p>
            <div className="flex justify-center">
              <Link href={`/${locale}/services`} className="bg-[#45624E] text-white px-6 py-2 rounded-full hover:bg-[#3a4c3d] transition duration-300 shadow-md">
                Online Store
              </Link>
            </div>
          </section>

          <section className="services-companies py-16 flex items-center bg-white rounded-lg shadow-md mb-8">
            <div className="w-2/3 pr-8 pl-8">
              <h2 className="text-3xl font-bold mb-8 text-[#45624E] text-center">Services for Companies</h2>
              <p className="mb-8 text-[#151515] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam a eros dictum, malesuada sem at, faucibus elit. 
                Morbi sed aliquet. Morbi feugiat nunc vel aliquet. Morbi feugiat
                vehicula. Donec arcu elit, molestie in purus et, interdum mollis
                augue. Sed euismod urna non quam feugiat odio volutpat eget.
              </p>
              <div className="flex justify-center">
                <Link href={`/${locale}/services`} className="bg-[#45624E] text-white px-6 py-2 rounded-full hover:bg-[#3a4c3d] transition duration-300 shadow-md">
                  Link
                </Link>
              </div>
            </div>
            <div className="w-1/3 pr-8">
              <div className="bg-[#D9D9D9] h-64 w-full rounded-lg shadow-md"></div>
            </div>
          </section>

          <section className="customer-stories py-16 flex items-center bg-white rounded-lg shadow-md mb-8">
            <div className="w-2/3 pr-8 pl-8">
              <h2 className="text-3xl font-bold mb-8 text-[#45624E] text-center">Customer Stories</h2>
              <p className="mb-8 text-[#151515] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam a eros dictum, malesuada sem at, faucibus elit. 
                Morbi sed aliquet. Morbi feugiat nunc vel aliquet. Morbi feugiat
                vehicula. Donec arcu elit, molestie in purus et, interdum mollis
                augue. Sed euismod urna non quam feugiat odio volutpat eget.
              </p>
              <div className="flex justify-center">
                <Link href={`/${locale}/stories`} className="bg-[#45624E] text-white px-6 py-2 rounded-full hover:bg-[#3a4c3d] transition duration-300 shadow-md">
                  Link
                </Link>
              </div>
            </div>
            <div className="w-1/3 pr-8">
              <div className="bg-[#D9D9D9] h-64 w-full rounded-lg shadow-md"></div>
            </div>
          </section>
        </div>
      </main>
      {/*<Footer />*/}
    </div>
  );
}
