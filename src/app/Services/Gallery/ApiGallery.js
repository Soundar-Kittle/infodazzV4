import {get,post,patch,del} from "@/lib/apiService";

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

export const reorderGallery = async (data) => {
  try {
    const response = await patch(API_URL, data, {
      headers: { "Content-Type": "application/json" },
    });
    toast.success("Gallery order updated!");
    return response;
  } catch (error) {
    toast.error("Failed to reorder images");
    throw error;
  }
};
