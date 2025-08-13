'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <Container as="section" id="about" className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-5 items-center gap-4 sm:gap-4">
        <div className="sm:col-span-2 flex flex-col gap-4">
          <Image
            src="/placeholders/about-main.png"
            alt="About"
            width={400}
            height={500}
            className="rounded-xl w-full max-w-[95%] h-full object-cover object-center"
          />
        </div>

        <div className="sm:col-span-3">
          <h3 className="text-2xl sm:text-4xl font-bold mb-1.5">About Unlocking</h3>

          <h2 className="text-4xl font-bold mb-10">
            <span className="text-sky-500 uppercase">ARTIFICIAL INTELLIGENCE</span> for <br />{' '}
            Superior Healthcare
          </h2>

          <h2 className="text-2xl sm:text-3xl font-bold text-sky-500">Our History</h2>

          <p className="mt-4 text-gray-600 sm:max-w-5/6">
            Since our founding in 1985, Unlocking Artificial Intelligence for Superior Healthcare
            has been dedicated to providing high-quality medical care to our patients. Over the
            years, we have grown to become one of the most trusted healthcare providers in the area.
          </p>

          <Button
            size="lg"
            className="w-full sm:w-auto h-12 has-[>svg]:px-6 text-white font-bold  bg-blue-600 hover:bg-blue-800 rounded-3xl flex justify-between items-center gap-10 mt-14"
          >
            <span>Get Started Now</span>
            <Plus className="size-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
