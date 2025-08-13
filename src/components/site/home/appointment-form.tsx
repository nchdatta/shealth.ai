'use client';

import { DatePicker } from '@/components/form-fields/date-picker';
import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AppointmentFormSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

type AppointmentFormValues = z.infer<typeof AppointmentFormSchema>;

const AppointmentForm = () => {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(AppointmentFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: undefined,
      message: '',
    },
  });

  const onSubmit = (values: AppointmentFormValues) => {
    console.log(values);
  };

  return (
    <Container as="section" id="appointments">
      <h2 className="text-3xl font-bold text-center">Book an Appointment</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 grid gap-10  py-10 sm:py-20">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                      className="border-0 border-b placeholder:text-gray-800 border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="border-0 border-b placeholder:text-gray-800 border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      placeholder="Phone"
                      className="border-0 border-b placeholder:text-gray-800 border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select date"
                      icon={false}
                      className="border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500 text-gray-800 bg-transparent font-normal"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    placeholder="Message"
                    className="border-0 border-b placeholder:text-gray-800 border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full mx-auto sm:w-fit mt-4 flex items-center gap-2 bg-[#0066ff] text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            <div className="sm:w-44 flex items-center gap-4 justify-between">
              Book Now
              <Plus size={16} />
            </div>
          </Button>
        </form>
      </Form>
    </Container>
  );
};

export default AppointmentForm;
