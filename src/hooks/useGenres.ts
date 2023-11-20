import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24hrs
    initialData: {
      count: genres.length,
      results: genres,
    },
  });
};

export default useGenres;
