'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      variant="default"
      size="lg"
      onClick={scrollToTop}
      className={`size-11 fixed bottom-8 right-8 z-[999] bg-blue-700 hover:bg-blue-800 text-white rounded-full p-1 shadow-lg transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
      style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
    >
      <ArrowUp />
    </Button>
  );
};

export default ScrollToTop;
