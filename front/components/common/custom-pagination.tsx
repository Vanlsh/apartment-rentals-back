"use client";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { DOTS, usePagination } from "@/hooks/use-pagination";
import { useQueryParameters } from "@/hooks/use-query-parameters";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const CustomPagination = ({
  siblingCount = 1,
  currentPage,
  pageSize,
  totalCount,
}: {
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  totalCount: number;
}) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  const { updateQueryParameters } = useQueryParameters();

  useEffect(() => {
    updateQueryParameters({
      page: currentPage,
      limit: pageSize,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize]);

  return (
    <Pagination>
      <PaginationContent className="flex-wrap justify-center">
        <PaginationItem>
          <Button
            className="gap-1"
            variant="ghost"
            disabled={currentPage === 1}
            onClick={() =>
              updateQueryParameters({
                page: currentPage - 1,
              })
            }
          >
            <ChevronLeft size={18} />
          </Button>
        </PaginationItem>

        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <PaginationItem key={`dots-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={pageNumber}>
              <Button
                variant="ghost"
                disabled={
                  typeof pageNumber === "number" && pageNumber === currentPage
                }
                className={cn("disabled:opacity-100", {
                  "border border-primary":
                    typeof pageNumber === "number" &&
                    pageNumber === currentPage,
                })}
                onClick={() =>
                  typeof pageNumber === "number" &&
                  updateQueryParameters({
                    page: pageNumber,
                  })
                }
              >
                {pageNumber}
              </Button>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <Button
            className="gap-1"
            variant="ghost"
            disabled={currentPage >= totalPages}
            onClick={() =>
              updateQueryParameters({
                page: currentPage + 1,
              })
            }
          >
            <ChevronRight size={18} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
