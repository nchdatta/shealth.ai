import { cn } from '@/lib/utils';

interface Props {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Container = ({ as: Tag = 'div', className, children }: Props) => {
  return <Tag className={cn('container max-w-[1400px] mx-auto px-3', className)}>{children}</Tag>;
};

export default Container;
