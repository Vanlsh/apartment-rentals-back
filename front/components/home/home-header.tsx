import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import AddFlatButton from "../flat/add-flat-button";
import FlatFilters from "./flat-filters";

interface IHomeHeaderProps {
  className?: string;
  filters: { roomsCount?: number; priceMin?: number; priceMax?: number };
}

const HomeHeader = ({ className, filters }: IHomeHeaderProps) => {
  return (
    <Card className={cn("rounded-sm", className)}>
      <CardHeader className="p-2 flex-row space-y-0">
        <AddFlatButton />
        <FlatFilters className="ml-auto" filters={filters} />
      </CardHeader>
    </Card>
  );
};

export default HomeHeader;
