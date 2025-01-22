import { X } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface ISearchBadgeProps {
  children: React.ReactNode;
  onClick: () => void;
}

const SearchBadge = ({ children, onClick }: ISearchBadgeProps) => {
  return (
    <Badge variant="outline">
      {children}
      <Button variant="ghost" className="p-1 h-4 w-4 ml-4" onClick={onClick}>
        <X size={12} />
      </Button>
    </Badge>
  );
};

export default SearchBadge;
