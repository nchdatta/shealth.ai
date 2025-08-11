import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFilePath = (pathname: string, type: 'image' | 'file' = 'image') => {
  if (!pathname && type === 'image') return '/placeholder.webp';

  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  return process.env.NEXT_PUBLIC_FILE_BASE_URL + normalizedPath;
};
