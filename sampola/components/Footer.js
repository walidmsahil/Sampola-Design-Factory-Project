import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#45624E] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2">Services for companies</h3>
          <ul>
            <li><Link href="#">Service 1</Link></li>
            <li><Link href="#">Service 2</Link></li>
            <li><Link href="#">Service 3</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Services for customers</h3>
          <ul>
            <li><Link href="#">Service A</Link></li>
            <li><Link href="#">Service B</Link></li>
            <li><Link href="#">Service C</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">About us</h3>
          <ul>
            <li><Link href="#">Our story</Link></li>
            <li><Link href="#">Mission</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow us</h3>
          <div className="flex space-x-2">
            <Link href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></Link>
            <Link href="#"><Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} /></Link>
            <Link href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /></Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Image src="/logo.svg" alt="Sampola Logo" width={100} height={30} />
      </div>
    </footer>
  );
}