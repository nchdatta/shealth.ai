'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={cn(
        'w-full mx-auto fixed left-0 top-0 z-[999]',
        'transition-all duration-200 ease-in',
        scrolled ? 'bg-white text-gray-800' : 'bg-transparent'
      )}
    >
      <Container className="py-2 sm:py-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={140} height={40} />
            </Link>

            <div className="w-[1px] h-6 bg-black/90" />

            <nav className="hidden md:flex items-center gap-3 text-gray-700 font-medium uppercase">
              <Button
                variant="linkV2"
                className="text-gray-700 font-medium uppercase hover:text-[#008FD0]"
                onClick={() => handleScrollTo('#about')}
              >
                About Us
              </Button>
              <Button
                variant="linkV2"
                className="text-gray-700 font-medium uppercase hover:text-[#008FD0]"
                onClick={() => handleScrollTo('#services')}
              >
                Services
              </Button>
              <Button
                variant="linkV2"
                className="text-gray-700 font-medium uppercase hover:text-[#008FD0]"
                onClick={() => handleScrollTo('#resources')}
              >
                Resources
              </Button>
              <Button
                variant="linkV2"
                className="text-gray-700 font-medium uppercase hover:text-[#008FD0]"
                onClick={() => handleScrollTo('#appointments')}
              >
                Appointments
              </Button>
              <Button
                variant="linkV2"
                className="text-gray-700 font-medium uppercase hover:text-[#008FD0]"
                onClick={() => handleScrollTo('#contact')}
              >
                Contact Us
              </Button>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-gray-700 uppercase">Call us</span>
              <Link
                href="tel:+1234567890"
                className="text-blue-600 hover:underline font-bold text-xl"
              >
                033 123 565 22
              </Link>
            </div>

            <div className="w-[1px] h-6 bg-black/90 hidden sm:block" />

            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-700 font-bold uppercase"
              onClick={() => handleScrollTo('#appointments')}
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
