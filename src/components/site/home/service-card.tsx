import Image from 'next/image';

interface Props {
  item: {
    title: string;
    image: string;
    icon: string;
  };
  colorScheme: string;
  className?: string;
}

const ServiceCard = ({ item, className, colorScheme = 'blue' }: Props) => {
  return (
    <div className={className}>
      <div className="sm:w-80 border border-t-blue-400 border-r-blue-400 border-l-blue-200 border-b-blue-200 px-2 sm:px-6 py-4 sm:py-7 rounded-tr-[4rem] rounded-tl-[1.5rem] rounded-bl-[4rem] rounded-br-[1.5rem] sm:rounded-tr-[7rem] sm:rounded-tl-[2.5rem] sm:rounded-bl-[7rem] sm:rounded-br-[2.5rem] relative">
        {/* badge  */}
        <div className="flex justify-start mb-4 sm:mb-0">
          <div
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full font-semibold text-white flex justify-center items-center shadow-[0_4px_20px_rgba(168,85,247,0.5)]"
            style={{
              backgroundColor: colorScheme,
            }}
          >
            <Image src={item.icon} alt={item.title} width={24} height={24} />
          </div>
        </div>

        <div className="mx-auto mb-5 sm:mb-10 flex w-full h-auto sm:h-[200px] sm:w-[200px] items-center justify-center rounded-2xl text-blue-500">
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="text-center text-sm sm:text-lg font-semibold text-slate-900">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
