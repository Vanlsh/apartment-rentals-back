"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "@/components/common/modal";
import FlatForm from "../forms/flat-form";
import { FlatSchema } from "../forms/utils";
import { updateFlatAction } from "@/actions/flat";
import { toFormData } from "@/lib/to-form-data";
import { toast } from "@/hooks/use-toast";
import { Flat } from "@/types/flat";

interface IEditFlatModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
  flat: Flat;
}

const EditFlatModal = ({
  isOpen,
  setIsOpen,
  closeModal,
  flat,
}: IEditFlatModalProps) => {
  const onSubmit = async (values: FlatSchema) => {
    if (!values.photo || "string" === typeof values.photo) delete values.photo;

    try {
      const response = await updateFlatAction(flat._id, toFormData(values));

      if (response.error) {
        return toast({
          variant: "destructive",
          description: response.error,
        });
      }
      closeModal();
    } catch (error) {
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
      title="Edit apartment"
      description="Form for adding apartment"
    >
      <FlatForm
        onSubmit={onSubmit}
        defaultValues={flat}
        onCancel={closeModal}
      />
    </Modal>
  );
};

export default EditFlatModal;
