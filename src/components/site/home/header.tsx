'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full mx-auto bg-white fixed left-0 top-0 z-50">
      <Container className="py-2 sm:py-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Image src="/logo.svg" alt="Logo" width={140} height={40} />

            <div className="w-[1px] h-6 bg-black/90" />

            <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium uppercase">
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
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-gray-700 uppercase">Call us</span>
              <Link
                href="tel:+1234567890"
                className="text-blue-600 hover:underline font-bold text-xl"
              >
                033 123 565 22
              </Link>
            </div>

            <div className="w-[1px] h-6 bg-black/90" />

            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-700 font-bold uppercase"
            >
              <span>Book An Appointment</span>
              <Plus className="ml-1 size-8 text-white bg-blue-600 hover:bg-blue-800 p-1.5 rounded-md" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
