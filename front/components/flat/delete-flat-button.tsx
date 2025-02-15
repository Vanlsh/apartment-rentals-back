'use client';

import { useModal } from '@/hooks/use-modal';
import Modal from '../common/modal';
import { useTransition } from 'react';
import { Button } from '../ui/button';
import { Flat } from '@/types/flat';
import LoadingButton from '../common/loading-button';
import { deleteFlatAction } from '@/actions/flat';
import { toast } from '@/hooks/use-toast';
import { Trash2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '@/store/favorite/slice';

interface IDeleteFlatButtonProps {
  className?: string;
  flat: Flat;
}

const DeleteFlatButton = ({ className, flat }: IDeleteFlatButtonProps) => {
  const { isOpen, setIsOpen, openModal, closeModal } = useModal();
  const [isPending, startTransition] = useTransition();
  const { flatId } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleConfirm = async () => {
    startTransition(async () => {
      try {
        const response = await deleteFlatAction(flat._id);

        if (response.error) {
          toast({
            variant: 'destructive',
            description: response.error,
          });
          return;
        }
        if (flatId) router.replace('/');
        dispatch(removeFavorite(flat._id));
        closeModal();
      } catch (error) {
        toast({
          variant: 'destructive',
          description: 'An error occurred!',
        });
      }
    });
  };
  return (
    <>
      <Button variant="ghost" className={className} onClick={openModal}>
        <Trash2 />
      </Button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add apartment"
        description={`Are you sure you want to delete the apartment ${flat.title}`}
        isDescriptionSrOnly={false}
      >
        <div className="flex justify-end gap-3">
          <Button onClick={closeModal} variant="outline">
            Cancel
          </Button>
          <LoadingButton
            variant="destructive"
            disabled={isPending}
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
