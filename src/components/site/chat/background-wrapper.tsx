import React from 'react';

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#eaf3fc] via-[#f2edf9] to-[#f5e9f9] relative">
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
