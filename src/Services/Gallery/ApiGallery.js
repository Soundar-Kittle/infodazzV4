import {get,post,patch,del} from "@/lib/apiService";
import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL = "/api/gallery";

export const addGallery = (formdata) => {
return post(API_URL,formdata);
}


export const editGallery = (formdata) => {
return patch(API_URL,formdata);
}

export const getGallery = () => {
return get(`${API_URL}`);
}

export const deleteGallery = (id) => {
return del(API_URL,{id})
}

export const reorderGallery = async (payload) => {
  try {
    await axios.patch(`${API_URL}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Gallery order updated");
  } catch (error) {
    console.error("❌ Reorder error:", error);
    toast.error("Failed to update order");
  }
};