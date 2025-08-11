const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Resources</h2>
        <p className="text-gray-600 mt-2">Over the years, we have grown...</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {['Video Library', 'Free Download', 'Quick Reads', 'Press'].map((res) => (
            <div key={res} className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
              <p className="font-medium">{res}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
