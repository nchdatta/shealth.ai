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
      <div className="w-80 border border-t-blue-400 border-r-blue-400 border-l-blue-200 border-b-blue-200 px-6 py-7 rounded-tr-[7rem] rounded-tl-[2.5rem] rounded-bl-[7rem] rounded-br-[2.5rem] relative">
        {/* badge  */}
        <div className="flex justify-start">
          <div
            className="w-10 h-10 rounded-full font-semibold text-white flex justify-center items-center shadow-2xl p-2.5"
            style={{
              backgroundColor: colorScheme,
            }}
          >
            <Image src={item.icon} alt={item.title} width={24} height={24} />
          </div>
        </div>

        <div className="mx-auto mb-20 flex h-[100px] w-[100px] items-center justify-center rounded-2xl bg-white text-blue-500">
          <Image src={item.image} alt={item.title} width={100} height={100} />
        </div>

        {/* Title */}
        <h3 className="mb-6 text-center text-lg font-bold text-slate-900">{item.title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
