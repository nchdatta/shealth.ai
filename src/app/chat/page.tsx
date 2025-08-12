import BackgroundWrapper from '@/components/site/chat/background-wrapper';
import ExampleQueries from '@/components/site/chat/example-queries';
import FooterNote from '@/components/site/chat/footer-note';
import LogoSection from '@/components/site/chat/logo-section';
import MainHeading from '@/components/site/chat/main-heading';
import PromptInput from '@/components/site/chat/prompt-input';

const page = () => {
  return (
    <BackgroundWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <LogoSection />
        <MainHeading />
        <PromptInput />
        <ExampleQueries />
        <FooterNote />
      </div>
    </BackgroundWrapper>
  );
};

export default page;
