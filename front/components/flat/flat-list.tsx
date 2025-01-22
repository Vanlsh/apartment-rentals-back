import { Flat } from "@/types/flat";
import FlatCard from "./flat-card";
import { cn } from "@/lib/utils";

interface IFlatListProps {
  className?: string;
  flats: Flat[];
}

const FlatList = ({ className, flats }: IFlatListProps) => {
  return (
    <ul
      className={cn(
        "grid gap-4",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {flats.map((flat) => (
        <li key={flat._id} className="h-full">
          <FlatCard className="h-full" flat={flat} />
        </li>
      ))}
    </ul>
  );
};

export default FlatList;
