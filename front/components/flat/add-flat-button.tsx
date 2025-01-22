'use client';

import { useModal } from '@/hooks/use-modal';
import { Button } from '../ui/button';
import AddFlatModal from '../modals/add-flat-modal';

interface IAddFlatButtonProps {
  className?: string;
}

const AddFlatButton = ({ className }: IAddFlatButtonProps) => {
  const { isOpen, setIsOpen, openModal, closeModal } = useModal();
  return (
    <>
      <Button onClick={openModal} className={className}>
        Add apartment
      </Button>
      <AddFlatModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default AddFlatButton;
