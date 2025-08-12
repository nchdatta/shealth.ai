import Footer from '@/components/layout/footer';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Main content area */}
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default LandingLayout;
