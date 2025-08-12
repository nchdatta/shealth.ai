'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full mx-auto">
      <Container className="py-2 sm:py-4">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={140} height={40} />
          </Link>

          <Button variant="link" className="text-blue-600 hover:text-blue-700 font-bold uppercase">
            <span>Contact Us</span>
            <Plus className="ml-1 size-8 text-white bg-blue-600 hover:bg-blue-800 p-1.5 rounded-md" />
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
