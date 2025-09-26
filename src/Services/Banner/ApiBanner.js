// import axios from "axios";
// import toast from "react-hot-toast";

// const API_URL = "/api/banners";

// // ✅ Add Banner
// export const addBanner = async (formData) => {
//   try {
//     const response = await axios.post(`${API_URL}`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     toast.success(response.data.message);
//     return response.data;
//   } catch (error) {
//     toast.error(error.response?.data?.error || "Failed to add Banner");
//     throw error.response?.data;
//   }
// };

// // ✅ Get Banner
// export const getBanners = async () => {
//   try {
//     const response = await axios.get(`${API_URL}`);
//     return response.data;
//   } catch (error) {
//     toast.error("Failed to fetch Banners");
//     throw error.response?.data;
//   }
// };

// // ✅ Delete Banner
// export const deleteBanner = async (id) => {
//   try {
//     const response = await axios.delete(`${API_URL}`, { data: { id } });
//     toast.success("Banner deleted successfully!");
//     return response.data;
//   } catch (error) {
//     toast.error("Failed to delete Banner");
//     throw error.response?.data;
//   }
// };

// // ✅ Edit Banner
// export const editBanner = async (formData) => {
//   try {
//     const response = await axios.patch(`${API_URL}`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     toast.success("Banner updated successfully!");
//     return response.data;
//   } catch (error) {
//     toast.error("Failed to update Banner");
//     throw error.response?.data;
//   }
// };

import { del, get, patch, post } from "@/lib/apiService";

const API_URL = "/api/banners";

export const addBanner = (formData) => {
  return post(API_URL, formData);
};

export const editBanner = (formData) => {
  return patch(API_URL, formData);
};

export const deleteBanner = (id) => {
  return del(API_URL, { id });
};

export const getBanners = () => {
  return get(`${API_URL}`);
};
