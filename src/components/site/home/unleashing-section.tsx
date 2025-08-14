'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const UnleashingSection = () => {
  return (
    <Container as="section" id="about" className="py-10">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Unleashing the <span className="text-sky-500">POWER OF AI</span> in Clinical Research
        </h2>

        <p className="text-sky-500">Introducing the Private Healthcare AI Cloud</p>

        <span className="inline-block w-14 h-[1px] bg-gray-600 my-10 sm:my-16" />

        <Link href="https://sandbox.shealth.ai/">
          <Button
            size="lg"
            className="w-full sm:w-auto h-12 has-[>svg]:px-6 text-white font-bold  bg-blue-600 hover:bg-blue-800 rounded-3xl flex justify-between items-center gap-10"
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
