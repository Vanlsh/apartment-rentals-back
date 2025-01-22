import { Flat } from "@/types/flat";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import noImage from "@/public/no-image-v2.jpg";
import { cn } from "@/lib/utils";
import LikeButton from "./like-button";

interface IFlatCardProps {
  className?: string;
  flat: Flat;
}

const FlatCard = ({ className, flat }: IFlatCardProps) => {
  return (
    <Card className={cn("overflow-hidden relative", className)}>
      <LikeButton flatId={flat._id} />
      <Image
        className="w-full h-56 object-cover"
        src={flat.photo || noImage.src}
        width={500}
        height={500}
        alt={flat.title}
      />

      <CardHeader>
        <CardTitle>{flat.title}</CardTitle>
        <p>Count of rooms: {flat.roomsCount}</p>
        <p>Price: {flat.price}</p>
      </CardHeader>
    </Card>
  );
};

export default FlatCard;
