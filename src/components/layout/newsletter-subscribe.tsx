'use client';

import axiosInstance from '@/lib/services/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import z from 'zod';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const NewsletterSubscribe = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });

  const isPending = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response: any = await axiosInstance.post('/', values, {
        params: { type: 'subscription', action: 'add' },
      });

      if (response?.success) {
        toast.success('Subscription successful!');
      } else {
        toast.error('Subscription failed. Please try again.');
      }

      form.reset();
    } catch (err) {
      console.error(err);
      toast.error('An error occurred while subscribing. Please try again later.');
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col sm:flex-row items-center justify-between"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <FormLabel className="text-[#0056d2]">Subscribe Now:</FormLabel>
              <FormControl>
                <input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="bg-transparent border-b border-black/50 focus:outline-none px-2 py-1 w-full md:w-64"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size="lg"
          disabled={isPending}
          className="w-full sm:w-fit mt-4 md:mt-0 flex items-center gap-2 bg-[#0066ff] text-white rounded-full hover:bg-blue-700 transition  shadow-[0_4px_20px_rgba(37,99,235,0.5)]"
        >
          <div className="sm:w-44 flex items-center gap-4 justify-between">
            {isPending ? 'Subscribing...' : 'Subscribe'}
            <Plus size={16} />
          </div>
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterSubscribe;
