import z from 'zod';

export const AppointmentFormSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  date: z.date({ error: 'Date is required' }),
  message: z.string().optional(),
});
