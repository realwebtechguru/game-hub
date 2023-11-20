import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

import { Platform } from "../utils/interfaces/Platforms";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, //24hr
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });
};
export default usePlatforms;
