import { Flat } from '@/types/flat';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import noImage from '@/public/no-image-v2.jpg';
import { cn } from '@/lib/utils';
import LikeButton from './like-button';
import DeleteFlatButton from './delete-flat-button';
import EditFlatButton from './edit-flat-button';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

interface IFlatCardProps {
  className?: string;
  flat: Flat;
}

const FlatCard = ({ className, flat }: IFlatCardProps) => {
  return (
    <Card className={cn('relative flex flex-col overflow-hidden', className)}>
      <LikeButton flat={flat} />
      <Image
        className="h-56 w-full object-cover"
        src={flat.photo || noImage.src}
        width={500}
        height={500}
        alt={flat.title}
      />

      <CardHeader className="flex flex-grow flex-col justify-between">
        <div className="space-y-2">
          <CardTitle>{flat.title}</CardTitle>
          <p className="line-clamp-3 text-muted-foreground">
            {flat.description}
          </p>
          <p>Count of rooms: {flat.roomsCount}</p>
          <p>Price: {flat.price}</p>
        </div>
        <div className="flex gap-3">
          <Button asChild className="flex-1">
            <Link href={`/${flat._id}`}>Open details</Link>
          </Button>
          <DeleteFlatButton flat={flat} />
          <EditFlatButton flat={flat} />
        </div>
      </CardHeader>
    </Card>
  );
};

export default FlatCard;
