import { api } from "@/lib/api";
import { sendRequest } from "@/lib/fetch-data";
import { ApiResponse, Pagination, Tags } from "@/types";
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
  console.log("getFlats");
  return await sendRequest<ApiResponse<FlatsData>>("/api/flat", {
    query: filters,
    init: { next: { tags: ["flats"] } },
  });
};

export const addFlat = <T>(values: T) => {
  return api.post("/api/flat", values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateFlat = <T>(id: string, values: T) => {
  return api.patch(`/api/flat/${id}`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteFlat = (id: string) => {
  return api.delete(`/api/flat/${id}`);
};
