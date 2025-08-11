'use client';

const NewsletterSubscribe = () => {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Email"
          className="border-b border-gray-300 bg-transparent p-2 focus:outline-none w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSubscribe;
