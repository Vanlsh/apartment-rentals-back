"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "@/components/common/modal";
import FlatForm from "../forms/flat-form";
import { FlatSchema } from "../forms/utils";

interface IAddFlatModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
}

const AddFlatModal = ({ isOpen, setIsOpen }: IAddFlatModalProps) => {
  const onSubmit = (values: FlatSchema) => {
    console.log(values);
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Add apartment"
      description="Form for adding apartment"
    >
      <FlatForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default AddFlatModal;
