import Container from '@/components/shared/container';
import ResourceCard from './resource-card';

const ResourcesSection = () => {
  return (
    <Container as="section" id="resources" className="relative py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-28 items-start">
        {/* Left: Cards */}
        <div className="order-2 sm:order-1">
          {/* Layout with subtle offsets to mimic the design */}
          <div className="flex items-center gap-4 sm:gap-5">
            <ResourceCard
              item={{
                title: 'Video Library',
                description: 'Explore the complete listing of our Webinars and podcasts',
                image: '/placeholders/video.svg',
                buttonTitle: 'Explore Now',
                count: 1,
              }}
              colorScheme="#0063FF"
              className="pt-8"
            />
            <ResourceCard
              item={{
                title: 'Free Download',
                description:
                  'Our research material including eBooks, Case Studies is  available online',
                image: '/placeholders/download.svg',
                buttonTitle: 'Download',
                count: 2,
              }}
              colorScheme="#0063FF"
            />
          </div>
        </div>

        {/* Right: Heading and copy */}
        <div className="order-1 sm:order-2">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#002130] dark:text-slate-100">
            Resources
          </h2>

          <div className="mt-10 space-y-10">
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
              <p className="mt-2 text-lg text-[#002130] dark:text-slate-300">
                Over the years, we have grown to become one of the most trusted healthcare providers
                in the area.
              </p>
              <p className="mt-2 text-lg text-[#002130] dark:text-slate-300">
                Over the years, we have grown to become one of the most trusted healthcare providers
                in the area.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-5 sm:-mt-52">
        <div className="flex items-center gap-4 sm:gap-5">
          <ResourceCard
            item={{
              title: 'Quick Reads',
              description: 'The Latest on our Blog & Medical  services In The News',
              image: '/placeholders/quick-reads.svg',
              buttonTitle: 'Read Now',
              count: 3,
            }}
            colorScheme="#A63AB3"
            className="flex-1"
          />
          <ResourceCard
            item={{
              title: 'Press',
              description:
                'Please get in touch with our Marketing & PR Team for any press or PR related inquiry ',
              image: '/placeholders/press.svg',
              buttonTitle: 'Contact Us',
              count: 4,
            }}
            colorScheme="#A63AB3"
            className="sm:pt-72 flex-1"
          />
        </div>
      </div>
    </Container>
  );
};

export default ResourcesSection;
