import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "/api/testimonials";

// ✅ Add Testimonial
export const addTestimonial = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    toast.success(response.data.message || "Testimonial added successfully!");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.error || "Failed to add testimonial");
    throw error.response?.data;
  }
};

// ✅ Get Testimonials
// export const getTestimonials = async (
//   pageIndex,
//   pageSize,
//   sorting,
//   filters
// ) => {
//   try {
//     const response = await axios.get(
//       `${API_URL}?pageIndex=${pageIndex}&pageSize=${pageSize}&filters=${JSON.stringify(
//         filters
//       )}&sorting=${JSON.stringify(sorting)}`
//     );
//     return response.data;
//   } catch (error) {
//     toast.error("Failed to fetch testimonials");
//     throw error.response?.data;
//   }
// };

export const getTestimonials = async (pageIndex, pageSize, filters = {}) => {
  try {
    const query = new URLSearchParams({
      pageIndex,
      pageSize,
      filters: JSON.stringify(filters),
    }).toString();

    const response = await axios.get(`${API_URL}?${query}`);
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch testimonials");
    throw error?.response?.data || error;
  }
};

// ✅ Delete Testimonial
export const deleteTestimonial = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}`, { data: { id } });
    toast.success("Testimonial deleted successfully!");
    return response.data;
  } catch (error) {
    toast.error("Failed to delete testimonial");
    throw error.response?.data;
  }
};

// ✅ Edit Testimonial
export const editTestimonial = async (formData) => {
  try {
    const response = await axios.patch(`${API_URL}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    toast.success("Testimonial updated successfully!");
    return response.data;
  } catch (error) {
    toast.error("Failed to update testimonial");
    throw error.response?.data;
  }
};
