'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

interface Props {
  value?: Date;
  onChange: (range: Date | undefined) => void;
  placeholder?: string;
  icon?: boolean;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  icon = true,
  className,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn('w-full justify-between', className)}>
          {value ? format(value, 'MMM dd, yyyy') : placeholder}
          {icon && <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" defaultMonth={value} selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  );
}
