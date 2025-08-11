'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="flex flex-col gap-4">
        <Image src="/about-main.png" alt="About" width={400} height={500} className="rounded-xl" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          About Unlocking <span className="text-sky-500">ARTIFICIAL INTELLIGENCE</span> for Superior
          Healthcare
        </h2>
        <p className="mt-4 text-gray-600">
          Since our founding in 1985, Unlocking AI for Superior Healthcare has been dedicated to
          providing high-quality medical care...
        </p>
        <Button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          Get Started Now +
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
