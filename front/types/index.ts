export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface Pagination {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export enum Tags {
  Flats = "flats",
}
