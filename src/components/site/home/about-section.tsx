'use client';

import Container from '@/components/shared/container';
import { LinkButton } from '@/components/ui/link-button';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="bg-[rgba(205,215,237,0.2)]">
      <Container as="section" id="about" className="py-10 sm:pt-24 sm:pb-36 relative">
        <div className="absolute w-[1.5px] h-16 bg-[#002130] left-3 xl:left-8 top-10 xl:top-24" />
        <div className="absolute w-[1.5px] h-24 xl:h-5/12 bg-[#002130] left-3/8 top-10 xl:top-24 mx-6" />
        <div className="absolute w-[1.5px] h-32 bg-[#002130] right-3 xl:right-8 top-10 xl:top-24" />

        <div className="grid grid-cols-1 xl:grid-cols-5 items-center gap-8 sm:gap-4 border-t-2 border-[#002130] pt-28 lg:pt-44">
          <div className="xl:col-span-2 flex flex-col gap-4">
            <Image
              src="/placeholders/about-main.png"
              alt="About"
              width={400}
              height={500}
              className="rounded-xl w-full max-w-[95%] h-full object-cover object-center"
            />
          </div>

          <div className="xl:col-span-3">
            <h3 className="text-4xl sm:text-4xl :text-6xl font-bold mb-1.5">About Unlocking</h3>

            <h2 className="text-4xl sm:text-4xl 2xl:text-6xl font-bold mb-12 text-[#002130]">
              <span className="text-[#008FD0] uppercase">ARTIFICIAL INTELLIGENCE</span> for <br />{' '}
              Superior Healthcare
            </h2>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#008FD0]">Our History</h2>

            <p className="mt-4 text-gray-600 sm:max-w-5/6">
              Since our founding in 1985, Unlocking Artificial Intelligence for Superior Healthcare
              has been dedicated to providing high-quality medical care to our patients. Over the
              years, we have grown to become one of the most trusted healthcare providers in the
              area.
            </p>

            <LinkButton
              size="lg"
              className="w-full sm:w-70 h-14 has-[>svg]:px-6 text-white font-bold  bg-blue-600 hover:bg-blue-800 rounded-3xl flex justify-between items-center gap-10  shadow-[0_4px_20px_rgba(37,99,235,0.5)] mt-14"
              href="https://sandbox.shealth.ai/"
              target="_blank"
            >
              <span>TRY IMAGING SANDBOX</span>
              <Plus className="size-4" />
            </LinkButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
