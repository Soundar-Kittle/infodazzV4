import { get } from "@/lib/apiService";

const API_URL = "/api/sitemap";

export const getSiteMap = () => {
  return get(`${API_URL}`);
};
