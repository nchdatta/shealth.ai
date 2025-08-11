'use client';

import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../shared/scroll-to-top';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer />
      <ScrollToTop />
    </>
  );
};

export default RootProvider;
