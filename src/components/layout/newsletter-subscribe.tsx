'use client';

import { Plus } from 'lucide-react';
import { Button } from '../ui/button';

const NewsletterSubscribe = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between">
      <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span className="text-[#0056d2] font-bold">Subscribe Now:</span>
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border-b border-black/50 focus:outline-none px-2 py-1 w-full md:w-64"
        />
      </div>
      <Button
        size="lg"
        className="w-full sm:w-fit mt-4 md:mt-0 flex items-center gap-2 bg-[#0066ff] text-white rounded-full hover:bg-blue-700 transition  shadow-[0_4px_20px_rgba(37,99,235,0.5)]"
      >
        <div className="sm:w-44 flex items-center gap-4 justify-between">
          Subscribe
          <Plus size={16} />
        </div>
      </Button>
    </div>
  );
};

export default NewsletterSubscribe;
