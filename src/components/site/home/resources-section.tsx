import Container from '@/components/shared/container';
import ResourceCard from './resource-card';

const ResourcesSection = () => {
  return (
    <Container as="section" id="resources" className="relative py-10 sm:my-20">
      <div className="hidden xl:block absolute w-[1.5px] h-2/3 bg-[#002130] right-3 top-0" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 xl:gap-28 items-start">
        {/* Left: Cards */}
        <div className="order-2 xl:order-1">
          {/* Layout with subtle offsets to mimic the design */}
          <div className="flex items-center gap-4 sm:gap-5">
            <ResourceCard
              item={{
                title: 'Video Library',
                description: 'Explore the complete listing of our Webinars and podcasts',
                image: '/placeholders/video.svg',
                // buttonTitle: 'Explore Now',
                count: 1,
              }}
              colorScheme="#0063FF"
              className="xl:mt-15 flex-1 sm:grow-0"
            />
            <ResourceCard
              item={{
                title: 'Free Download',
                description:
                  'Our research material including eBooks, Case Studies is  available online',
                image: '/placeholders/download.svg',
                // buttonTitle: 'Download',
                count: 2,
              }}
              colorScheme="#0063FF"
              className="-mt-20 xl:-mt-0 flex-1 sm:grow-0"
            />
          </div>
        </div>

        {/* Right: Heading and copy */}
        <div className="order-1 xl:order-2">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#002130] dark:text-slate-100">
            Resources
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-100">Dummy copy</h3>
              <p className="mt-2 text-lg text-[#002130] dark:text-slate-300">
                for Superior Healthcare has been dedicated to providing high-quality medical care to
                our patients. Over the years, we have grown to become one of the most trusted
                healthcare providers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-100">Dummy copy</h3>
              <p className="mt-1.5 text-lg text-[#002130] dark:text-slate-300">
                Over the years, we have grown to become one of the most trusted healthcare providers
                in the area.
              </p>
              <p className="mt-1.5 text-lg text-[#002130] dark:text-slate-300">
                Over the years, we have grown to become one of the most trusted healthcare providers
                in the area.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-5">
        <div className="flex items-center gap-4 sm:gap-5">
          <ResourceCard
            item={{
              title: 'Quick Reads',
              description: 'The Latest on our Blog & Medical  services In The News',
              image: '/placeholders/quick-reads.svg',
              // buttonTitle: 'Read Now',
              count: 3,
            }}
            colorScheme="#A63AB3"
            className="-mt-0 xl:-mt-40 flex-1 sm:grow-0"
          />
          <ResourceCard
            item={{
              title: 'Press',
              description:
                'Please get in touch with our Marketing & PR Team for any press or PR related inquiry ',
              image: '/placeholders/press.svg',
              // buttonTitle: 'Contact Us',
              count: 4,
            }}
            colorScheme="#A63AB3"
            className="-mt-14 xl:-mt-0 flex-1 sm:grow-0"
          />
        </div>
      </div>
    </Container>
  );
};

export default ResourcesSection;
