import { sendRequest } from "@/lib/fetch-data";
import { ApiResponse, Pagination } from "@/types";
import { Flat } from "@/types/flat";

interface FlatsData extends Pagination {
  data: Flat[];
}

export const getFlats = async (filters: {
  page: number;
  roomsCount?: number;
  priceMin?: number;
  priceMax?: number;
}) => {
  return await sendRequest<ApiResponse<FlatsData>>("/api/flat", {
    query: filters,
  });
};
