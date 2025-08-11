'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Unlocking <span className="text-black">ARTIFICIAL INTELLIGENCE</span>{' '}
          <span className="text-sky-500">for Superior Healthcare</span>
        </h1>
        <Button className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          Try Now
        </Button>
      </div>
      <div className="flex justify-center">
        <Image
          src="/hero-image.png"
          alt="AI DNA"
          width={400}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
