"use client";

import { useModal } from "@/hooks/use-modal";
import Modal from "../common/modal";
import { Button } from "../ui/button";
import { Flat } from "@/types/flat";
import { useTransition } from "react";
import LoadingButton from "../common/loading-button";
import { deleteFlatAction } from "@/actions/flat";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface IDeleteFlatButtonProps {
  className?: string;
  flat: Flat;
}

const DeleteFlatButton = ({ className, flat }: IDeleteFlatButtonProps) => {
  const { isOpen, setIsOpen, openModal, closeModal } = useModal();
  const [isPending, startTransition] = useTransition();

  const handleConfirm = async () => {
    startTransition(async () => {
      try {
        const response = await deleteFlatAction(flat._id);

        if (response.error) {
          toast({
            variant: "destructive",
            description: response.error,
          });
          return;
        }
        closeModal();
      } catch (error) {
        toast({
          variant: "destructive",
          description: "An error occurred!",
        });
      }
    });
  };
  return (
    <>
      <Button variant="destructive" className={className} onClick={openModal}>
        Delete
      </Button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add apartment"
        description={`Are you sure you want to delete the apartment ${flat.title}`}
        isDescriptionSrOnly={false}
      >
        <div className="flex gap-3 justify-end">
          <Button onClick={closeModal} variant="outline">
            Cancel
          </Button>
          <LoadingButton
            variant="destructive"
            isLoading={isPending}
            onClick={handleConfirm}
          >
            Delete
          </LoadingButton>
        </div>
      </Modal>
    </>
  );
};

export default DeleteFlatButton;
