'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const UnleashingSection = () => {
  return (
    <Container as="section" id="about" className="py-20 sm:py-40 relative">
      <div className="absolute w-[1.5px] h-11/12 bg-[#002130] left-3 xl:left-8 top-0" />
      <div className="absolute w-[1.5px] h-1/8 bg-[#002130] right-3 xl:right-8 top-0" />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl 2xl:text-7xl font-bold px-1.5 sm:px-0 mb-8">
          Unleashing the <span className="text-sky-500">POWER OF AI</span> in Clinical Research
        </h2>

        <p className="text-xl sm:text-2xl text-sky-500">
          Introducing the Private Healthcare AI Cloud
        </p>

        <span className="inline-block w-16 h-[1.5px] bg-gray-600 my-10 xl:my-20" />

        <Link
          href="https://sandbox.shealth.ai/"
          className="w-full mx-auto flex justify-center mt-4"
          target="_blank"
        >
          <Button
            size="lg"
            className="w-full sm:w-70 h-12 has-[>svg]:px-6 text-white font-bold  bg-blue-600 hover:bg-blue-800 rounded-3xl flex justify-between items-center gap-10  shadow-[0_4px_20px_rgba(37,99,235,0.5)]"
          >
            <span>Get Started Now</span>
            <Plus className="size-4" />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default UnleashingSection;
