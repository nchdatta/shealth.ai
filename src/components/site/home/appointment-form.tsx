'use client';

import { DatePicker } from '@/components/form-fields/date-picker';
import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AppointmentFormSchema } from '@/lib/schemas';
import axiosInstance from '@/lib/services/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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

  const isPending = form.formState.isSubmitting;

  const onSubmit = async (values: AppointmentFormValues) => {
    const formattedValues = {
      ...values,
      date: values.date.toISOString()?.split('T')[0],
    };

    try {
      const response: any = await axiosInstance.post('', formattedValues, {
        params: { type: 'appointment', action: 'add' },
      });

      if (response?.success) {
        toast.success('Appointment successful!');
      } else {
        toast.error('Appointment failed. Please try again.');
      }

      form.reset();
    } catch (err) {
      console.error(err);
      toast.error('An error occurred while booking. Please try again later.');
    }
  };

  return (
    <div className="bg-[rgba(205,215,237,0.2)]">
      <Container as="section" id="appointments" className="pt-10 pb-20 relative">
        <div className="absolute w-[1.5px] h-64 bg-[#002130] left-3 xl:left-8 -top-44" />
        <div className="absolute w-[1.5px] h-20 lg:h-36 bg-[#002130] right-20 lg:right-44 top-0 lg:-top-10" />
        <div className="absolute w-[1.5px] h-48 lg:h-64 bg-[#002130] right-3 xl:right-8 -top-16 lg:-top-28" />

        <h2 className="text-3xl sm:text-4xl font-bold text-center border-t-2 border-[#002130] pt-14">
          Book an Appointment
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 grid gap-10">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Name"
                        className="border-0 border-b placeholder:text-[#002130] placeholder:text-lg border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500"
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
                        className="border-0 border-b placeholder:text-[#002130] placeholder:text-lg border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />

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
                        className="border-0 border-b placeholder:text-[#002130] placeholder:text-lg border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500"
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
                        className="border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500 text-[#002130] text-lg bg-transparent font-normal px-3"
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
                      className="border-0 border-b placeholder:text-[#002130] placeholder:text-lg border-gray-300 rounded-none focus-visible:ring-0 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="w-full h-12 sm:w-70 mx-auto mt-4 has-[>svg]:px-6 flex items-center justify-between gap-2 bg-[#0066ff] text-white rounded-full hover:bg-blue-700 transition shadow-[0_4px_20px_rgba(37,99,235,0.5)]"
            >
              <span>{isPending ? 'Booking...' : 'Book Now'}</span>
              <Plus size={18} className="size-4" />
            </Button>
          </form>
        </Form>
      </Container>
    </div>
  );
};

export default AppointmentForm;
