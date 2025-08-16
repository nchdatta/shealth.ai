'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <Container as="section" className="pt-30 relative">
      <div className="absolute w-[1.5px] h-full bg-[#002130] left-3 xl:left-8 top-[120px]" />
      <div className="absolute w-[1.5px] h-40 bg-[#002130] left-[108px] sm:left-[192px] xl:left-[225px] top-20" />
      <div className="absolute w-[1.5px] h-6 xl:h-14 bg-[#002130] sm:left-3/6 xl:left-1/2 top-[120px]" />
      <div className="absolute w-[1.5px] h-3/6 bg-[#002130] right-3 xl:right-8 top-[120px]" />

      <div className="grid xl:grid-cols-3 gap-4 sm:gap-8 items-center border-t-2 border-b-2 border-[#002130]">
        {/* Left Side  */}
        <div className="xl:col-span-2 order-2 xl:order-1 ms-auto text-right">
          <p className="text-6xl text-[#008FD0] font-bold">Unlocking</p>
          <h1 className="text-5xl sm:text-8xl 2xl:text-9xl font-extrabold mb-2 text-[#002130]">
            ARTIFICIAL <br /> INTELLIGENCE
          </h1>
          <p className="text-6xl text-[#008FD0] font-bold">for Superior Healthcare</p>

          <Link href="https://beta.shealth.ai/">
            <Button
              size="lg"
              className="ms-auto w-full sm:w-80 h-14 has-[>svg]:px-6 text-white font-bold bg-blue-600 hover:bg-blue-800 rounded-3xl flex justify-between items-center gap-10 mt-10 shadow-[0_4px_20px_rgba(37,99,235,0.5)]"
            >
              <span>Try Now</span>
              <Plus className="size-4" />
            </Button>
          </Link>
        </div>

        {/* Right side  */}
        <div className="xl:col-span-1 order-1 xl:order-2">
          <div className="w-2/3 xl:w-auto ms-auto relative">
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

      <div className="absolute w-[1.5px] h-10 xl:h-16 bg-[#002130] left-1/2  xl:bottom-0" />
      <div className="absolute w-[1.5px] h-32 bg-[#002130] right-3 xl:right-8 bottom-0" />
    </Container>
  );
};

export default Hero;
