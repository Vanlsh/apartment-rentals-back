import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import AddFlatButton from "../flat/add-flat-button";

interface IHomeHeaderProps {
  className?: string;
}

const HomeHeader = ({ className }: IHomeHeaderProps) => {
  return (
    <Card className={cn("rounded-sm", className)}>
      <CardHeader className="p-2 flex-row">
        <AddFlatButton />
      </CardHeader>
    </Card>
  );
};

export default HomeHeader;
