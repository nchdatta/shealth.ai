'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <Container as="section" className="pt-30 pb-10">
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 items-center">
        {/* Left Side  */}
        <div className="sm:col-span-2 order-2 sm:order-1 ms-auto text-right">
          <p className="text-2xl text-sky-600 font-bold">Unlocking</p>
          <h1 className="text-5xl sm:text-8xl font-bold mb-2">
            ARTIFICIAL <br /> INTELLIGENCE
          </h1>
          <p className="text-2xl text-sky-600 font-bold">for Superior Healthcare</p>

          <Link href="/chat">
            <Button
              size="lg"
              className="ms-auto h-12 has-[>svg]:px-6 text-white font-bold  bg-blue-600 hover:bg-blue-800 rounded-3xl flex justify-between items-center gap-10 mt-10"
            >
              <span>Try Now</span>
              <Plus className="size-4" />
            </Button>
          </Link>
        </div>

        {/* Right side  */}
        <div className="sm:col-span-1 order-1 sm:order-2">
          <div className="w-2/3 sm:w-auto ms-auto relative">
            <Image
              src="/placeholders/ai.png"
              alt="ARTIFICIAL INTELLIGENCE"
              width={380}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
