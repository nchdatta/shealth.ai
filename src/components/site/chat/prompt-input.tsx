'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowUp, Mic, Plus, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  prompt: string;
}

const PromptInput = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      prompt: '',
    },
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  // TypeScript: define SpeechRecognition type if not present
  type _SpeechRecognition = typeof window extends { webkitSpeechRecognition: infer T }
    ? T extends new () => infer R
      ? R
      : any
    : any;
  const recognitionRef = useRef<_SpeechRecognition | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files as FileList)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMicClick = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }

    if (!recognitionRef.current) {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: _SpeechRecognition) => {
        const transcript = event.results[0][0].transcript;
        form.setValue('prompt', (form.getValues('prompt') + ' ' + transcript).trim());
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }

    if (!isRecording) {
      setIsRecording(true);
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
    }
  };

  const onSubmit = (values: FormValues) => {
    if (!values.prompt.trim() && files.length === 0) return;
    console.log('Prompt submitted:', values.prompt, files);
    form.reset();
    setFiles([]);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 w-full space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center w-full max-w-3xl rounded-full border border-transparent bg-gradient-to-r from-[#dfe9f3] to-[#e4d9f7] shadow-md px-4 h-14"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Left icons */}
          <div className="flex items-center gap-4 text-gray-600">
            {/* File Upload */}
            <Plus
              size={20}
              className="cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
              onChange={handleFileSelect}
              multiple
            />

            {/* Mic Button */}
            <Mic
              size={20}
              onClick={handleMicClick}
              className={`cursor-pointer ${isRecording ? 'text-red-500 animate-pulse' : ''}`}
            />
          </div>

          {/* Divider */}
          <div className="mx-3 h-6 w-px bg-gray-300" />

          {/* Input field */}
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Type your Prompt..."
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:outline-none placeholder:text-gray-500 text-gray-800 h-12"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Divider */}
          <div className="mx-3 h-6 w-px bg-gray-300" />

          {/* Submit button */}
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-transparent hover:bg-gray-200"
          >
            <ArrowUp className="text-gray-700" size={20} />
          </Button>
        </form>
      </Form>

      {/* Uploaded Files Preview */}
      {files.length > 0 && (
        <div className="flex flex-col gap-2 w-full max-w-3xl">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded border p-2 text-sm bg-white"
            >
              <div className="flex items-center gap-2">
                {file.type.startsWith('image/') ? (
                  <Image
                    width={40}
                    height={40}
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="h-10 w-10 rounded object-cover"
                  />
                ) : (
                  <span className="text-blue-500">📄 PDF</span>
                )}
                <span className="truncate max-w-[200px]">{file.name}</span>
              </div>
              <Button size="icon" variant="ghost" onClick={() => removeFile(index)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromptInput;
