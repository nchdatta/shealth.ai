import Header from '@/components/site/sandbox/header';
import UploadSandbox from '@/components/site/sandbox/upload-sandbox';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk With ShealthAI',
  description: 'Engage in a conversation with ShealthAI',
};

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#dfe9f3] to-[#e4d9f7]">
      <Header />
      <UploadSandbox />
    </div>
  );
};

export default page;
