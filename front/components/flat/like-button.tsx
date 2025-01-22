import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ILikeButtonProps {
  className?: string;
  flatId: string;
}

const LikeButton = ({ className, flatId }: ILikeButtonProps) => {
  return (
    <Button variant="ghost" className={cn("absolute top-2 right-2", className)}>
      <Heart fill="#f44949" className="text-destructive" />
    </Button>
  );
};

export default LikeButton;
