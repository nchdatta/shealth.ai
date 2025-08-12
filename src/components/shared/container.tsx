import { cn } from '@/lib/utils';

interface Props {
  as?: React.ElementType;
  className?: string;
  id?: string | undefined;
  children: React.ReactNode;
}

const Container = ({ as: Tag = 'div', className, id, children }: Props) => {
  return (
    <Tag id={id} className={cn('container max-w-[1400px] mx-auto px-3', className)}>
      {children}
    </Tag>
  );
};

export default Container;
