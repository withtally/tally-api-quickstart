import { useQuery as useReactQuery } from "@tanstack/react-query";
import { fetcher } from "../RawQuery/fetcher";

export const useQuery = ({ query, variables }) => {
  return useReactQuery([query.slice(0,10)], () => {
    return fetcher({ query, variables });
  });
};
