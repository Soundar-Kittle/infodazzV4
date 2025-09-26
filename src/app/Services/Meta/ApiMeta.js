import { get, post, patch, del } from "@/lib/apiService";

const API_URL = "/api/meta";

export const addMeta = (formData) => {
  return post(API_URL, formData);
};

export const editMeta = (formData) => {
  return patch(API_URL, formData);
};

export const deleteMeta = (id) => {
  return del(API_URL, { id });
};

// export const getMetaTags = (referenceType, referenceId) => {
//   return get(`${API_URL}/${referenceType}/${referenceId}`);
// };
// export const getMetas = (referenceId) => {
//   return get(`${API_URL}/${referenceId}`);
// };

export const getMetas = (pageIndex = 0, pageSize = 10, filters = {}) => {
  const query = new URLSearchParams({
    pageIndex,
    pageSize,
    filters: JSON.stringify(filters),
  }).toString();

  return get(`${API_URL}?${query}`);
};
export const getAllMetas = () => {
  const query = new URLSearchParams({
    all: true,
  }).toString();

  return get(`${process.env.NEXT_PUBLIC_BASE_URL}${API_URL}?${query}`);
};
