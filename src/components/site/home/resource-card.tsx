import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Props {
  item: {
    title: string;
    description: string;
    image: string;
    buttonTitle?: string;
    count: number;
  };
  colorScheme: string;
  className?: string;
}

const ResourceCard = ({ item, className, colorScheme = 'blue' }: Props) => {
  return (
    <div className={className}>
      <div className="sm:w-80 border border-t-blue-400 border-r-blue-400 border-l-blue-200 border-b-blue-200 px-2 sm:px-3.5 py-4 sm:py-4 rounded-tl-[4rem] rounded-tr-[1.5rem] rounded-br-[4rem] rounded-bl-[1.5rem] sm:rounded-tl-[7rem] sm:rounded-tr-[2.5rem] sm:rounded-br-[7rem] sm:rounded-bl-[2.5rem] relative bg-[rgba(205,215,237,0.6)]">
        {/* badge  */}
        <div className="flex justify-end">
          <span
            className="w-6 sm:w-8 h-6 sm:h-8 rounded-full font-semibold text-white flex justify-center items-center shadow-[0_4px_20px_rgba(168,85,247,0.5)]"
            style={{
              backgroundColor: colorScheme,
            }}
          >
            {item.count}
          </span>
        </div>

        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-blue-500">
          <Image src={item.image} alt={item.title} width={55} height={55} />
        </div>

        {/* Title */}
        <h3 className="mb-4 text-center text-lg sm:text-xl font-bold text-slate-900">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-center text-xs sm:text-lg font-normal text-slate-600">
          {item.description}
        </p>

        {/* Button */}
        {item.buttonTitle && (
          <div className="flex justify-center">
            <Button
              size="sm"
              className="sm:h-10 rounded-xl sm:px-6 sm:py-2.5 text-sm sm:text-lg sm:font-semibold text-white hover:opacity-80"
              style={{
                backgroundColor: colorScheme,
              }}
            >
              {item.buttonTitle}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
