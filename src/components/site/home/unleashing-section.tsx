'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const UnleashingSection = () => {
  return (
    <Container as="section" id="about" className="py-10">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl 2xl:text-7xl font-bold mb-6">
          Unleashing the <span className="text-sky-500">POWER OF AI</span> in Clinical Research
        </h2>

        <p className="text-xl sm:text-2xl text-sky-500">
          Introducing the Private Healthcare AI Cloud
        </p>

        <span className="inline-block w-16 h-[1px] bg-gray-600 my-10 sm:my-16" />

        <Link href="https://sandbox.shealth.ai/">
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
