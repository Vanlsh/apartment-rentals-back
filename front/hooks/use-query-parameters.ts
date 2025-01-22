import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useQueryParameters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParameters = useSearchParams();

  const createQueryString = useCallback(
    (parameters: Record<string, string | number | null>) => {
      const newSearchParameters = new URLSearchParams();

      for (const [key, value] of searchParameters.entries()) {
        if (
          !Object.prototype.hasOwnProperty.call(parameters, key) &&
          !parameters[key]
        ) {
          newSearchParameters.set(key, value);
        }
      }

      for (const [key, value] of Object.entries(parameters)) {
        if (value === null) {
          newSearchParameters.delete(key);
        } else {
          newSearchParameters.set(key, String(value));
        }
      }

      return newSearchParameters.toString();
    },
    [searchParameters],
  );

  const updateQueryParameters = useCallback(
    (
      parameters: Record<string, string | number | boolean | null>,
      removeKeys: string[] = [],
    ) => {
      const newSearchParameters = new URLSearchParams(
        searchParameters.toString(),
      );

      removeKeys.forEach(key => newSearchParameters.delete(key));

      for (const [key, value] of Object.entries(parameters)) {
        if (value === null) {
          newSearchParameters.delete(key);
        } else {
          newSearchParameters.set(key, String(value));
        }
      }

      router.replace(`${pathname}?${newSearchParameters.toString()}`);
    },
    [router, pathname, searchParameters],
  );

  const getQueryParameter = useCallback(
    (parameter: string) => {
      return searchParameters.get(parameter);
    },
    [searchParameters],
  );

  return {
    getQueryParameter,
    searchParameters,
    createQueryString,
    updateQueryParameters,
  };
};
