import AboutSection from '@/components/site/home/about-section';
import AppointmentForm from '@/components/site/home/appointment-form';
import Footer from '@/components/site/home/footer';
import Header from '@/components/site/home/header';
import Hero from '@/components/site/home/hero';
import ResourcesSection from '@/components/site/home/resources-section';
import ServicesSection from '@/components/site/home/services-section';
import UnleashingSection from '@/components/site/home/unleashing-section';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="w-full max-w-[1920px] mx-auto h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholders/shape-7.jpg')",
          backgroundSize: '100%',
          backgroundPosition: 'center top',
        }}
      >
        <Header />
        <Hero />
        <UnleashingSection />
      </div>

      <div
        className="w-full max-w-[1920px] mx-auto h-full bg-no-repeat bg-contain bg-red-600"
        style={{
          backgroundImage: "url('/placeholders/shape-10.jpg')",
          backgroundSize: '100%',
          backgroundPosition: 'center top',
        }}
      >
        <AboutSection />
        <ServicesSection />
      </div>

      <div
        className="w-full max-w-[1920px] mx-auto h-full bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/placeholders/shape-11.jpg')",
          backgroundSize: '100%',
          backgroundPosition: 'center center',
        }}
      >
        <ResourcesSection />
        <AppointmentForm />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
