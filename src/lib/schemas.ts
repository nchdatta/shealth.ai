import z from 'zod';

export const AppointmentFormSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  date: z.date({ error: 'Date is required' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});
