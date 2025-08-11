import Link from 'next/link';
import NewsletterSubscribe from './newsletter-subscribe';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#eef1ff] py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg">
            Unlocking Artificial Intelligence For Superior Healthcare
          </h3>
          <p className="mt-2 text-sm text-gray-600">Hours: Mon to Fri: 09:00 am – 05:00 pm</p>
        </div>
        <div>
          <p className="text-sm">Contact Us:</p>
          <Link href="tel:03312356522" className="text-sm text-blue-600 hover:underline">
            033 123 565 22
          </Link>
          <Link href="mailto:shealth@gmail.com" className="text-sm text-blue-600 hover:underline">
            shealth@gmail.com
          </Link>
        </div>

        {/* Newsletter Subscription */}
        <NewsletterSubscribe />
      </div>
    </footer>
  );
};

export default Footer;
