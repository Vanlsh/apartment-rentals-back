const baseURL = process.env.api_url;

export class RequestError<E = unknown> extends Error {
  status: number;
  data: E;
  constructor(message: string, status: number, data: E) {
    super(message);
    this.status = status;
    this.name = "RequestError";
    this.data = data;
  }
}

export type Query = Record<string, string | number | boolean | undefined>;

export type FetchConfig = {
  query?: Query;
  init?: RequestInit;
};

export const buildUrl = (paths: string, queryParameters?: Query): string => {
  const normalizedBaseURL = baseURL?.replace(/\/+$/, "");
  const normalizedPath = paths.replace(/^\/+/, "");
  console.log("baseURL", baseURL);
  const url = new URL(`${normalizedBaseURL}/${normalizedPath}`);

  if (queryParameters) {
    Object.entries(queryParameters).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  return url.toString();
};

export const sendRequest = async <T>(
  url: string,
  { query, init }: FetchConfig = {}
): Promise<T> => {
  init = {
    headers: {
      "Content-Type": "application/json",
    },
    ...init,
  };

  const fullUrl = buildUrl(url, query);
  const response = await fetch(fullUrl, init);

  if (!response.ok) {
    const data = await response.json();
    throw new RequestError("An error occurred", response.status, data);
  }

  const data = await response.json();
  return data as T;
};
