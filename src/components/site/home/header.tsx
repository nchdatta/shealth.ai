'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/logo.svg" alt="Logo" width={140} height={40} />
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="#about" className="hover:text-blue-500">
            About Us
          </Link>
          <Link href="#services" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="#resources" className="hover:text-blue-500">
            Resources
          </Link>
          <Link href="#appointments" className="hover:text-blue-500">
            Appointments
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Call us:
            <Link href="tel:+1234567890" className="text-blue-600 hover:underline font-semibold">
              033 123 565 22
            </Link>
          </span>
          <Button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700">
            Book My Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
