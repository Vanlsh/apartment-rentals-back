"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "@/components/common/modal";
import FlatForm from "../forms/flat-form";
import { FlatSchema } from "../forms/utils";
import { addFlatAction } from "@/actions/flat";
import { toFormData } from "@/lib/to-form-data";
import { toast } from "@/hooks/use-toast";

interface IAddFlatModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
}

const AddFlatModal = ({
  isOpen,
  setIsOpen,
  closeModal,
}: IAddFlatModalProps) => {
  const onSubmit = async (values: FlatSchema) => {
    if (!values.photo || "string" === typeof values.photo) delete values.photo;

    try {
      console.log(values);
      const data = toFormData(values);
      console.log(data);

      const response = await addFlatAction(data);
      console.log(response);

      if (response.error) {
        return toast({
          variant: "destructive",
          description: response.error,
        });
      }
      closeModal();
    } catch (error) {
      console.log(error);

      toast({
        variant: "destructive",
        description: "An error occurred!",
      });
    }
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
