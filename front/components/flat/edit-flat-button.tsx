'use client';

import { useModal } from '@/hooks/use-modal';
import { Button } from '../ui/button';
import { Flat } from '@/types/flat';
import EditFlatModal from '../modals/edit-flat-modal';
import { Edit } from 'lucide-react';

interface IEditFlatButtonProps {
  className?: string;
  flat: Flat;
}

const EditFlatButton = ({ className, flat }: IEditFlatButtonProps) => {
  const { isOpen, setIsOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button variant="ghost" className={className} onClick={openModal}>
        <Edit />
      </Button>
      <EditFlatModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        flat={flat}
      />
    </>
  );
};

export default EditFlatButton;
