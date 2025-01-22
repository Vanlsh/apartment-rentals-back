import { Flat } from "@/types/flat";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import noImage from "@/public/no-image-v2.jpg";
import { cn } from "@/lib/utils";
import LikeButton from "./like-button";
import DeleteFlatButton from "./delete-flat-button";
import EditFlatButton from "./edit-flat-button";
import Image from "next/image";

interface IFlatDetailsProps {
  className?: string;
  flat: Flat;
}

const FlatDetails = ({ className, flat }: IFlatDetailsProps) => {
  return (
    <Card className={cn("relative", className)}>
      <LikeButton flat={flat} />
      <CardHeader className="flex-row gap-4">
        <Image
          className="w-full max-w-sm object-cover"
          src={flat.photo || noImage.src}
          width={500}
          height={500}
          alt={flat.title}
        />
        <div className="flex-1 flex flex-col">
          <div className="space-y-2 flex-grow">
            <CardTitle>{flat.title}</CardTitle>
            <p className="text-muted-foreground">{flat.description}</p>
            <p>Count of rooms: {flat.roomsCount}</p>
            <p>Price: {flat.price}</p>
          </div>
          <div className="flex gap-3 self-end">
            <DeleteFlatButton flat={flat} />
            <EditFlatButton flat={flat} />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FlatDetails;
