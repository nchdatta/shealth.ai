import Container from '@/components/shared/container';
import AboutSection from '@/components/site/home/about-section';
import AppointmentForm from '@/components/site/home/appointment-form';
import Header from '@/components/site/home/header';
import Hero from '@/components/site/home/hero';
import ResourcesSection from '@/components/site/home/resources-section';
import ServicesSection from '@/components/site/home/services-section';

const Home = () => {
  return (
    <Container className="bg-gradient-to-b from-white via-[#f6f4ff] to-[#e7e4ff] overflow-hidden">
      <Header />
      <Hero />
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Unleashing the <span className="text-sky-500">POWER OF AI</span> in Clinical Research
        </h2>
        <p className="mt-3 text-gray-600">Introducing the Private Healthcare AI Cloud</p>
        <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          Get Started Now +
        </button>
      </section>
      <AboutSection />
      <ServicesSection />
      <ResourcesSection />
      <AppointmentForm />
    </Container>
  );
};

export default Home;
