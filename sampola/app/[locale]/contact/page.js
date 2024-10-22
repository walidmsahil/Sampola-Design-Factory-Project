// ServicesForBusinesses page

import { Separator } from '@/components/ui/Separator';
import HeroSection from '@/components/HeroSection';
import { getContactPageData } from '@/lib/api';
import parse from 'html-react-parser';
export default async function Contact({ params }) {
  const { locale } = params;

  // Fetch data directly in the server component
  const ContactPageData = await getContactPageData(locale);
  console.log('ContactPageData', JSON.stringify(ContactPageData));

  const {
    heroSection,
    service_infos
  } = ContactPageData;

  return (
    <div className="min-h-screen">
  {/* Hero Section */}
  <HeroSection
    title={heroSection.welcomeTitle}
    subtitle={heroSection.subtitle}
    ctaText={heroSection.ctaButtonText}
    ctaLink={heroSection.ctaButtonLink}
    backgroundImage={heroSection.backgroundImage}
  />
  
  <div className="container mx-auto px-4 lg:px-8">
    <div className="flex flex-col lg:flex-row justify-between">
    <div className="w-full lg:w-1/2">
          {service_infos?.data?.map((info) => (
            <div key={info.id} className="mb-8 lg:mb-32">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#617968] mt-5 mb-5">
                {info.attributes.title}
              </h2>
              <div className=" lg:text-lg">
                {/* Render the markdown content */}
                {parse(info.attributes.markdown)}
              </div>
            </div>
          ))}
        </div>

      {/* Right Column: Map Section */}
      <div className="w-full lg:w-1/2 p-4 lg:p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1934.246560009717!2d24.450861427361083!3d61.000915276115144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e5de71e5081dd%3A0xabd3586ecfb235a5!2sTy%C3%B6keskus%20Sampola!5e0!3m2!1sfi!2sfi!4v1727785026629!5m2!1sfi!2sfi"
          width="100%"
          height="430"
          style={{ border: 0, borderRadius: '0.5rem' }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>

    <div className="flex w-full justify-center">
      <Separator className="my-10 h-[1px] w-[95%] bg-primary justify-center dark:bg-[#C0CFB2]" />
    </div>

    {/* Social Media Section */}
    <div className="text-center py-8 sm:py-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#617968] mb-6 sm:mb-10">Find us on social media</h2>
          <div className="flex justify-center md:space-x-20 space-x-16 px-5">
            {/* Facebook */}
            <div className="flex flex-col items-center">
              <a href="#" className="bg-primary text-primary-dark hover:text-primary-light flex justify-center align-middle items-center rounded-full dark:bg-[#242423] min-w-14 h-16 p-4 aspect-square mb-4">
                <svg className="object-contain w-full h-full" viewBox="0 0 23 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5738 8.57143H22.1117C22.5989 8.57143 22.9962 8.18638 22.9962 7.71429V0.857143C22.9962 0.385029 22.5989 0 22.1117 0H16.8049C11.441 0 7.07575 4.23047 7.07575 9.42857V13.7829H0.884469C0.397303 13.7829 0 14.1679 0 14.64V21.4286C0 21.9007 0.397321 22.2857 0.884469 22.2857H6.4606V35.1429C6.4606 35.615 6.85792 36 7.34507 36H14.7299C15.2171 36 15.6144 35.615 15.6144 35.1429V22.2857H20.2667C20.6692 22.2857 21.0233 22.0246 21.1253 21.6429L22.9702 14.7857C23.0411 14.5279 22.984 14.255 22.8148 14.0441C22.6472 13.8348 22.3898 13.7093 22.1169 13.7093H15.9256V11.1378C15.9256 9.71985 17.1158 8.56639 18.579 8.56639L18.5738 8.57143ZM15.036 15.4286H20.9663L19.5826 20.5714H14.7269C14.2397 20.5714 13.8424 20.9565 13.8424 21.4286V34.2857H8.22649V21.4286C8.22649 20.9565 7.82917 20.5714 7.34202 20.5714H1.76589V15.4971H7.95717C8.44433 15.4971 8.84164 15.1121 8.84164 14.64V9.42857C8.84164 5.17633 12.4106 1.71429 16.8019 1.71429H21.2242V6.85714H18.5708C16.1333 6.85714 14.1484 8.7807 14.1484 11.1429V14.5714C14.1484 15.0435 14.5458 15.4286 15.0329 15.4286H15.036Z" fill="#C0CFB1" />
                </svg>
              </a>
              <p className=" hidden md:block">facebook.com/Sampola</p>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center">
              <a href="#" className="bg-primary text-primary-dark hover:text-primary-light flex justify-center align-middle items-center rounded-full dark:bg-[#242423] min-w-14 h-16 p-4 aspect-square mb-4">
                <svg className="object-contain w-full h-full" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.8333 0H8.16669C6.00106 0.0029998 3.926 0.887998 2.39459 2.46301C0.863331 4.03802 0.00294933 6.17252 0 8.40002V27.6C0.00291647 29.8275 0.863331 31.9618 2.39459 33.537C3.92585 35.112 6.00106 35.997 8.16669 36H26.8333C28.9989 35.997 31.074 35.112 32.6054 33.537C34.1367 31.962 34.9971 29.8275 35 27.6V8.40002C34.9971 6.17252 34.1367 4.03817 32.6054 2.46301C31.0741 0.887998 28.9989 0.00303359 26.8333 0ZM32.6666 27.5999C32.6652 29.1899 32.0498 30.7154 30.956 31.8404C29.8623 32.9654 28.3792 33.5984 26.8333 33.5999H8.16669C6.62087 33.5984 5.13773 32.9654 4.04398 31.8404C2.95022 30.7154 2.33482 29.19 2.33337 27.5999V8.39998C2.33482 6.81 2.95022 5.28448 4.04398 4.15948C5.13773 3.03448 6.62083 2.40149 8.16669 2.4H26.8333C28.3791 2.40149 29.8623 3.03448 30.956 4.15948C32.0498 5.28448 32.6652 6.80996 32.6666 8.39998V27.5999ZM17.5 9.59998C15.3344 9.59998 13.2563 10.485 11.7249 12.06C10.1935 13.6349 9.33328 15.7725 9.33328 18C9.33328 20.2276 10.1937 22.365 11.7249 23.9401C13.2561 25.5153 15.3343 26.4001 17.5 26.4001C19.6657 26.4001 21.7437 25.5151 23.2751 23.9401C24.8065 22.3652 25.6667 20.2276 25.6667 18C25.6638 15.7725 24.8034 13.6382 23.2721 12.063C21.7409 10.488 19.6656 9.60301 17.5 9.59998ZM17.5 24C15.9527 24 14.4696 23.3685 13.3758 22.242C12.2806 21.117 11.6666 19.5915 11.6666 17.9999C11.6666 16.4084 12.2806 14.8829 13.3758 13.7579C14.4695 12.6314 15.9526 11.9999 17.5 11.9999C19.0473 11.9999 20.5304 12.6314 21.6242 13.7579C22.7194 14.8829 23.3334 16.4084 23.3334 17.9999C23.3319 19.5899 22.7165 21.1154 21.6227 22.2404C20.529 23.3654 19.0459 23.9985 17.5 24ZM29.4582 7.79979C29.4582 8.64878 28.9609 9.41528 28.1982 9.7393C27.4355 10.0648 26.5562 9.8848 25.9728 9.28479C25.3895 8.68479 25.2145 7.78028 25.5309 6.99581C25.8459 6.2113 26.5911 5.69982 27.4166 5.69982C28.5438 5.69982 29.4582 6.64027 29.4582 7.79979Z" fill="#C0CFB1" />
                </svg>
              </a>
              <p className=" hidden md:block">instagram.com/Sampola</p>
            </div>

            {/* YouTube */}
            <div className="flex flex-col items-center">
              <a href="#" className="bg-primary text-primary-dark hover:text-primary-light flex justify-center align-middle items-center rounded-full dark:bg-[#242423] min-w-14 h-16 p-4 aspect-square mb-4">
                <svg className="object-contain w-full h-full" viewBox="0 0 41 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.0758 2.19316C37.1645 1.49294 35.7325 1.26756 33.7174 1.13156C30.795 0.935711 25.8354 0.818359 20.4506 0.818359C15.0657 0.818359 10.1069 0.934934 7.1853 1.13156C5.17022 1.26756 3.73821 1.49294 2.82772 2.19316C2.19889 2.67734 1.43042 3.61382 1.0738 6.59269C0.600402 10.557 0.600402 19.597 1.0738 23.5629C1.43042 26.5378 2.1981 27.4759 2.82614 27.9593C3.73742 28.6626 5.17023 28.888 7.18609 29.024C10.1235 29.2191 15.0823 29.3364 20.4506 29.3364C25.8189 29.3364 30.7792 29.2198 33.7174 29.024C35.7325 28.8888 37.1653 28.6634 38.0782 27.9585C38.7062 27.4712 39.4739 26.5309 39.8266 23.5629C40.3023 19.597 40.3023 10.5562 39.8266 6.59269C39.4739 3.62082 38.7062 2.68122 38.0758 2.19316ZM38.2596 23.3818C38.0458 25.1786 37.6561 26.3078 37.1038 26.736C36.4757 27.221 34.9853 27.3811 33.6109 27.4736C30.7059 27.6671 25.7865 27.7821 20.4506 27.7821C15.1154 27.7821 10.1961 27.6671 7.29261 27.4736C5.9174 27.3811 4.427 27.221 3.79817 26.736C3.24509 26.3101 2.85612 25.1817 2.63994 23.3818C2.1768 19.5006 2.1768 10.6542 2.63994 6.77455C2.85533 4.97231 3.24509 3.84309 3.79738 3.41875C4.42621 2.93536 5.9174 2.77526 7.29182 2.682C10.1803 2.48849 15.0997 2.37269 20.4498 2.37269C25.8007 2.37269 30.7208 2.48849 33.6085 2.682C34.9845 2.77526 36.4749 2.93536 37.1022 3.4172C37.6561 3.84542 38.045 4.97464 38.2588 6.77455C38.7259 10.6542 38.7259 19.5006 38.2596 23.3818Z" fill="#C0CFB1" />
                  <path d="M27.6726 14.3878L16.2433 8.51868C15.998 8.39278 15.706 8.40133 15.4693 8.54355C15.2334 8.68421 15.0898 8.93602 15.0898 9.20802V20.9471C15.0898 21.2191 15.2342 21.4709 15.4693 21.6116C15.5948 21.687 15.7368 21.7243 15.8788 21.7243C16.0043 21.7243 16.1289 21.6947 16.2433 21.6364L27.6726 15.7657C27.9338 15.6321 28.0971 15.3663 28.0971 15.0764C28.0971 14.7865 27.933 14.5215 27.6726 14.3878ZM16.667 19.6655V10.4896L25.6008 15.0772L16.667 19.6655Z" fill="#C0CFB1" />
                </svg>
              </a>
              <p className=" hidden md:block">youtube.com/Sampola</p>
            </div>
          </div>
        </div>

        
  </div>
</div>

  );
}
