import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Props {
  item: {
    title: string;
    description: string;
    image: string;
    buttonTitle: string;
    count: number;
  };
  colorScheme: string;
  className?: string;
}

const ResourceCard = ({ item, className, colorScheme = 'blue' }: Props) => {
  return (
    <div className={className}>
      <div className="border border-t-blue-400 border-r-blue-400 border-l-blue-200 border-b-blue-200 px-2 sm:px-6 py-4 sm:py-7 rounded-tl-[4rem] rounded-tr-[1.5rem] rounded-br-[4rem] rounded-bl-[1.5rem] sm:rounded-tl-[7rem] sm:rounded-tr-[2.5rem] sm:rounded-br-[7rem] sm:rounded-bl-[2.5rem] relative">
        {/* badge  */}
        <div className="flex justify-end">
          <span
            className="w-6 sm:w-8 h-6 sm:h-8 rounded-full font-semibold text-white flex justify-center items-center shadow-2xl"
            style={{
              backgroundColor: colorScheme,
            }}
          >
            {item.count}
          </span>
        </div>

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-500">
          <Image src={item.image} alt={item.title} width={55} height={55} />
        </div>

        {/* Title */}
        <h3 className="mb-5 text-center text-lg font-bold text-slate-900">{item.title}</h3>

        {/* Description */}
        <p className="mb-8 text-center text-xs sm:text-sm text-slate-600">{item.description}</p>

        {/* Button */}
        <div className="flex justify-center">
          <Button
            size="sm"
            className="sm:h-11 rounded-xl sm:px-6 sm:py-3 text-sm sm:text-lg sm:font-semibold text-white hover:opacity-80"
            style={{
              backgroundColor: colorScheme,
            }}
          >
            {item.buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
