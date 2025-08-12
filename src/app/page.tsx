import AboutSection from '@/components/site/home/about-section';
import AppointmentForm from '@/components/site/home/appointment-form';
import Header from '@/components/site/home/header';
import Hero from '@/components/site/home/hero';
import ResourcesSection from '@/components/site/home/resources-section';
import ServicesSection from '@/components/site/home/services-section';
import UnleashingSection from '@/components/site/home/unleashing-section';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <UnleashingSection />
      <AboutSection />
      <ServicesSection />
      <ResourcesSection />
      <AppointmentForm />
    </div>
  );
};

export default Home;
