'use client';

const ExampleQueries = () => {
  const queries = [
    'Lorem Ipsum has been the industry’s standard',
    'Lorem Ipsum has been',
    '1960s with the release of Letraset',
    'long established fact',
    'The point of using Lorem Ipsum is that it has',
    'Many desktop publishing packages',
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
      <p className="text-gray-500 text-sm">Examples of queries:</p>
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {queries.map((q, i) => (
          <span
            key={i}
            className="text-sm px-3 py-1 rounded-full border border-gray-300 bg-white shadow-sm text-gray-700"
          >
            {q}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExampleQueries;
