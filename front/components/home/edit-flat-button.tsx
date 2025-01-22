"use client";

import { useModal } from "@/hooks/use-modal";
import { Button } from "../ui/button";
import { Flat } from "@/types/flat";
import EditFlatModal from "../modals/edit-flat-modal";

interface IEditFlatButtonProps {
  className?: string;
  flat: Flat;
}

const EditFlatButton = ({ className, flat }: IEditFlatButtonProps) => {
  const { isOpen, setIsOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button className={className} onClick={openModal}>
        Edit apartment
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
