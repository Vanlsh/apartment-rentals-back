"use client";

import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import FilterForm from "../forms/filter-form";
import { FilterSchema } from "../forms/utils";
import { useQueryParameters } from "@/hooks/use-query-parameters";
import { Badge } from "../ui/badge";
import SearchBadge from "./search-badge";
import { useTransition } from "react";

interface IFlatFiltersProps {
  className?: string;
  filters: { roomsCount?: number; priceMin?: number; priceMax?: number };
}

const FlatFilters = ({ className, filters }: IFlatFiltersProps) => {
  const { updateQueryParameters } = useQueryParameters();

  const handleFilters = (values: Partial<FilterSchema>) => {
    updateQueryParameters(values);
  };

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <div className="flex flex-wrap gap-3">
        {filters.roomsCount && (
          <SearchBadge
            onClick={() => handleFilters({ ...filters, roomsCount: null })}
          >
            {filters.roomsCount === 1
              ? `1 room`
              : `${filters.roomsCount} rooms`}
          </SearchBadge>
        )}
        {filters.priceMin && (
          <SearchBadge
            onClick={() => handleFilters({ ...filters, priceMin: null })}
          >
            Min price: {filters.priceMin}{" "}
          </SearchBadge>
        )}
        {filters.priceMax && (
          <SearchBadge
            onClick={() => handleFilters({ ...filters, priceMax: null })}
          >
            Max price: {filters.priceMax}
          </SearchBadge>
        )}
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Filter />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <FilterForm onSubmit={handleFilters} defaultValues={filters} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FlatFilters;
