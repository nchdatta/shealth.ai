import Container from '@/components/shared/container';
import ServiceCard from './service-card';

const ServiceSection = () => {
  return (
    <Container as="section" id="services" className="relative py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-28 items-center">
        {/* Left: Heading and copy */}
        <div className="sm:col-span-1">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Our <span className="sm:block"> Services</span>
          </h2>

          <div className="mt-8 space-y-10">
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              Since our founding in 1985, Unlocking Artificial Intelligence for Superior Healthcare
              has been dedicated to providing high-quality medical care to our patients.
            </p>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              Over the years, we have grown to become one of the most trusted healthcare providers
              in the area.
            </p>
          </div>
        </div>

        {/* Right: Cards */}
        <div className="sm:col-span-2">
          {/* Layout with subtle offsets to mimic the design */}
          <div className="flex items-center gap-4 mb-4">
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

          <div className="grid grid-cols-2 gap-4 sm:pl-28">
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
  );
};

export default ServiceSection;
