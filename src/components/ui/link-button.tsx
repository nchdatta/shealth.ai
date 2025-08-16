'use client';

import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { buttonVariants } from './button';

interface LinkButtonProps
  extends Omit<React.ComponentProps<typeof Link>, 'href'>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
}

const LinkButton = ({
  href,
  children,
  className,
  variant,
  size,
  disabled,
  ...props
}: LinkButtonProps) => {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={cn(
          buttonVariants({ variant, size }),
          'pointer-events-none opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </Link>
  );
};

export { LinkButton };
