export interface Flat {
  _id: string;
  title: string;
  description?: string;
  price: number;
  roomsCount: number;
  photo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FlatFilters {
  page?: string;
  roomsCount?: string;
  priceMin?: string;
  priceMax?: string;
}
