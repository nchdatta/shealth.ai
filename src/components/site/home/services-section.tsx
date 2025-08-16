import Container from '@/components/shared/container';
import ServiceCard from './service-card';

const ServiceSection = () => {
  return (
    <div className="bg-[rgba(205,215,237,0.2)]">
      <Container as="section" id="services" className="relative py-16">
        <div className="border-t-[2px] border-[#002130] left-0 top-0" />
        <div className="absolute w-[1.5px] h-24 xl:h-64 bg-[#002130] left-1/3 top-8 xl:-top-14" />
        <div className="absolute w-[1.5px] h-2/3 bg-[#002130] right-3 -top-2 xl:-top-36" />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-28 items-center pt-16">
          {/* Left: Heading and copy */}
          <div className="xl:col-span-1">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#002130] dark:text-slate-100">
              Our <span className="sm:block"> Services</span>
            </h2>

            <div className="mt-8 space-y-10 pr-1.5 xl:pr-0">
              <p className="mt-2 text-lg text-[#002130] dark:text-slate-300">
                Since our founding in 1985, Unlocking Artificial Intelligence for Superior
                Healthcare has been dedicated to providing high-quality medical care to our
                patients.
              </p>
              <p className="mt-2 text-lg text-[#002130] dark:text-slate-300">
                Over the years, we have grown to become one of the most trusted healthcare providers
                in the area.
              </p>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="xl:col-span-2">
            {/* Layout with subtle offsets to mimic the design */}
            <div className="flex items-center gap-4 mb-2">
              <ServiceCard
                item={{
                  title: 'Clinical Research',
                  image: '/placeholders/clinical-dna.png',
                  icon: '/placeholders/icon-1.svg',
                }}
                colorScheme="#0063FF"
                className="pt-8"
              />
              <ServiceCard
                item={{
                  title: 'Diagnosis',
                  image: '/placeholders/diagnosis.png',
                  icon: '/placeholders/stethoscope.svg',
                }}
                colorScheme="#0063FF"
              />
            </div>

            <div className="flex items-center justify-end gap-4 sm:pl-28">
              <ServiceCard
                item={{
                  title: 'Diagnostic',
                  image: '/placeholders/diagnostic.png',
                  icon: '/placeholders/icon-3.svg',
                }}
                colorScheme="#A63AB3"
              />
              <ServiceCard
                item={{
                  title: 'Drug Discovery',
                  image: '/placeholders/discovery.png',
                  icon: '/placeholders/icon-4.svg',
                }}
                colorScheme="#A63AB3"
                className="pt-7"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceSection;
