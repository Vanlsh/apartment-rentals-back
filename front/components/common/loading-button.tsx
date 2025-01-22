import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

interface ILoadingButtonProps extends ButtonProps {
  isLoading: boolean;
}
const LoadingButton = ({
  children,
  isLoading,
  className,
  ...rest
}: ILoadingButtonProps) => {
  return (
    <Button className={cn('gap-2', className)} {...rest}>
      {children}
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
    </Button>
  );
};

export default LoadingButton;
