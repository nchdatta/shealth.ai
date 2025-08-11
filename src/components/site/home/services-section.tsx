const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-600">Since our founding in 1985...</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Clinical Research', 'Diagnosis', 'Diagnostic', 'Drug Discovery'].map((service) => (
            <div
              key={service}
              className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full mb-4" />
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
