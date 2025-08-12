import Image from 'next/image';
import Link from 'next/link';

const LogoSection = () => {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <Link href="/">
        <Image
          src="/placeholders/logo-bg.png"
          alt="Logo 1"
          width={100}
          height={60}
          className="object-cover object-center rounded-2xl"
          quality={100}
        />
      </Link>

      <Image
        src="/placeholders/logo-bg-2.png"
        alt="Logo 2"
        width={100}
        height={60}
        className="object-cover object-center rounded-2xl"
        quality={100}
      />
    </div>
  );
};

export default LogoSection;
