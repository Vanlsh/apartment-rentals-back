import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';

export interface IModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  isDescriptionSrOnly?: boolean;
}

const Modal = ({
  isOpen,
  setIsOpen,
  title,
  description,
  children,
  className,
  headerClassName,
  isDescriptionSrOnly = true,
}: IModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={className}>
        <DialogHeader className={headerClassName}>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription
            className={cn('text-balance', { ['sr-only']: isDescriptionSrOnly })}
          >
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
