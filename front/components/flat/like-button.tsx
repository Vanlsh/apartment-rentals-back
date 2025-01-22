"use client";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "@/store/favorite/selectors";
import { Flat } from "@/types/flat";
import { addFavorite, removeFavorite } from "@/store/favorite/slice";

interface ILikeButtonProps {
  className?: string;
  flat: Flat;
}

const LikeButton = ({ className, flat }: ILikeButtonProps) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isLiked = favorites.some(({ _id }) => _id === flat._id);

  const handleLike = () => {
    if (isLiked) {
      return dispatch(removeFavorite(flat._id));
    }
    dispatch(addFavorite(flat));
  };
  return (
    <Button
      variant="ghost"
      className={cn("absolute top-2 right-2", className)}
      onClick={handleLike}
    >
      <Heart
        fill={isLiked ? "#f44949" : ""}
        className={cn({ "text-destructive": isLiked })}
      />
    </Button>
  );
};

export default LikeButton;
