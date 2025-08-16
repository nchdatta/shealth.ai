import { Clock, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Copyright from '../../layout/copyright';
import NewsletterSubscribe from '../../layout/newsletter-subscribe';
import Container from '../../shared/container';

const Footer = () => {
  return (
    <footer className="bg-[#CDD2EE] pt-10 sm:pt-16 sm:px-4 rounded-tl-[5rem] sm:rounded-tl-[8rem] 2xl:rounded-tl-[10rem]">
      <Container>
        <Image src="/logo.svg" alt="Shealth AI Logo" width={150} height={50} className="mb-6" />

        {/* Top section with two columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 2xl:gap-36 items-start md:items-end relative">
          {/* Left Column */}
          <div className="md:border-r-2 border-[#002130] pr-0 md:pr-8 sm:pb-36">
            <h3 className="text-[#0056d2] font-medium sm:font-bold text-xl sm:text-3xl leading-snug">
              Unlocking Artificial Intelligence For Superior Healthcare
            </h3>
            <div className="mt-10">
              <h4 className="text-[#0056d2] font-bold text-lg sm:text-xl">Hours:</h4>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-gray-800">
                <Clock size={16} />
                Mon to Fri : 09:00 am – 05:00 pm
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:pl-8 pb-5 sm:pb-20">
            <h4 className="text-[#0056d2] font-bold text-lg sm:text-xl">Contact Us:</h4>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-gray-800">
              <Clock size={16} />
              Mon to Fri : 09:00 am – 05:00 pm
            </p>
            <Link
              href="tel:03312356522"
              className="mt-2 flex items-center gap-2 text-gray-800 hover:text-blue-600"
            >
              <Phone size={16} />
              033 123 565 22
            </Link>
            <Link
              href="mailto:info@shealth.ai"
              className="mt-2 flex items-center gap-2 text-gray-800 hover:text-blue-600"
            >
              <Mail size={16} />
              info@shealth.ai
            </Link>
          </div>

          <div className="hidden sm:inline-block absolute w-[1.5px] h-40 bg-[#002130] left-0 -bottom-8 -translate-x-0" />
          <div className="absolute w-[1.5px] h-40 bg-[#002130] right-0 -bottom-8 -translate-x-0" />
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#002130] pt-5 sm:pt-16 flex flex-col md:flex-row items-center justify-between">
          {/* Subscribe section */}
          <NewsletterSubscribe />
        </div>

        {/* Bottom text */}
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
