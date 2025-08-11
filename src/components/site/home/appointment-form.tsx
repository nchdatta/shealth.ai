'use client';

import { Button } from '@/components/ui/button';

const AppointmentForm = () => {
  return (
    <section id="appointments" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Book an Appointment</h2>
        <form className="mt-10 grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="border-b border-gray-300 p-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border-b border-gray-300 p-3 focus:outline-none"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              className="border-b border-gray-300 p-3 focus:outline-none"
            />
            <input type="date" className="border-b border-gray-300 p-3 focus:outline-none" />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="border-b border-gray-300 p-3 focus:outline-none"
          ></textarea>
          <div className="text-center">
            <Button
              type="submit"
              className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Book Now +
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
