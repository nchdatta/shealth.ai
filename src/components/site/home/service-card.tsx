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
        <div className="flex justify-start">
          <div
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full font-semibold text-white flex justify-center items-center shadow-2xl p-2.5"
            style={{
              backgroundColor: colorScheme,
            }}
          >
            <Image src={item.icon} alt={item.title} width={24} height={24} />
          </div>
        </div>

        <div className="mx-auto mb-5 sm:mb-20 mt-4 sm:mt-0 flex w-full h-auto sm:h-[100px] sm:w-[100px] items-center justify-center rounded-2xl bg-white text-blue-500">
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="w-12 h-auto object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="mb-5 sm:mb-6 text-center text-sm sm:text-lg font-semibold sm:font-bold text-slate-900">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
