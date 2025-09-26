import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "/api/settings";

export const addSettings = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.error || "Failed to add settings");
    throw error.response?.data;
  }
};

// // ✅ Get Courses
export const getSettings = async () => {
  try {
    const response = await axios.get(`${API_URL}`);

    return response.data;
  } catch (error) {
    toast.error("Failed to fetch Settings");
    throw error.response?.data;
  }
};
