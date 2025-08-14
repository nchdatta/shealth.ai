'use client';

import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, FileText, FolderCheck, ScanLine } from 'lucide-react';

const uploadOptions = [
  {
    title: 'PDF/DOC',
    description: 'Lorem Ipsum As Their Default Model Text, And A Search For',
    icon: <FileText size={48} className="text-blue-500" />,
  },
  {
    title: 'DICOM',
    description: 'Lorem Ipsum As Their Default Model Text, And A Search For',
    icon: <FolderCheck size={48} className="text-blue-500" />,
  },
  {
    title: 'X-RAY',
    description: 'Lorem Ipsum As Their Default',
    icon: <ScanLine size={48} className="text-blue-500" />,
  },
  {
    title: 'MRI',
    description: 'Lorem Ipsum As Their Default',
    icon: <Brain size={48} className="text-blue-500" />,
  },
  {
    title: 'Histology',
    description: 'Lorem Ipsum As Their Default',
    icon: <Brain size={48} className="text-blue-500" />,
  },
];

const UploadSandbox = () => {
  return (
    <Container as="section" className="mt-10">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
        Talk With ShealthAI
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {uploadOptions.map((item, idx) => (
          <Card
            key={idx}
            className="rounded-2xl border border-gray-100 shadow bg-white/30 backdrop-blur-lg flex-flex-col justify-between"
          >
            <CardHeader className="flex flex-col pt-4 px-2 sm:px-6">
              {item.icon}
              <CardTitle className="text-lg font-bold text-gray-900 mt-5">{item.title}</CardTitle>
              <p className="text-left text-gray-600 text-sm">{item.description}</p>
            </CardHeader>
            <CardContent className="flex justify-center px-2 sm:px-6">
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                onClick={() => alert(`Upload for ${item.title}`)}
              >
                Upload
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default UploadSandbox;
