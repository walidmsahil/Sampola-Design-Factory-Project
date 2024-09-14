import Image from "next/image"
import { Separator } from "@/components/ui/separator"
export default function Footer() {
  return (
    <footer className=" py-12 px-4">
      <div className="flex w-full justify-center">
        <Separator className="mb-20 h-[2px] w-[95%] bg-green justify-center " />
      </div>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex space-x-4">
            <a href="#" className="text-green-dark hover:text-green-light">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="text-green-dark hover:text-green-light">
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" className="text-green-dark hover:text-green-light">
              <Image src="/icons/tiktok.svg" alt="Tiktok" width={24} height={24} />
            </a>
            <a href="#" className="text-green-dark hover:text-green-light">
              <Image src="/icons/youtube.svg" alt="Youtube" width={24} height={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <ul className="space-y-2">
            <li><a href="#" className="text-green-dark hover:text-green-light">Home</a></li>
            <li><a href="#" className="text-green-dark hover:text-green-light">Services for consumers</a></li>
            <li><a href="#" className="text-green-dark hover:text-green-light">Services for companies</a></li>
            <li><a href="#" className="text-green-dark hover:text-green-light">Services for municipal factor</a></li>
            <li><a href="#" className="text-green-dark hover:text-green-light">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <ul className="space-y-2">
            <li><a href="#" className="text-green-dark hover:text-green-light">About us</a></li>
            <li><a href="#" className="text-green-dark hover:text-green-light">Kpsaatio</a></li>
            <li><a href="#" className="text-green-dark hover:text-green-light">Webshop</a></li>
            <li><a href="#" className="text-green-dark hover:text-green-light">Services for municipal factor</a></li>
            <li><a href="#" className="text-green-dark hover:text-green-light">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 flex justify-end items-end">
          <Image
            src="/icons/sampolaFooterLogo.png"
            alt="Sampola Logo"
            width={150}
            height={50}
          />
        </div>
      </div>
    </footer>
  )
}