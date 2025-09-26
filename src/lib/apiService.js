import toast from "react-hot-toast";

const handleResponse = async (res, method) => {
  const contentType = res.headers.get("content-type");
  const isJSON = contentType && contentType.includes("application/json");
  const data = isJSON ? await res.json() : await res.text();

  if (!res.ok) {
    const errorMessage = data?.error || data?.message || "Something went wrong";
    toast.error(errorMessage);
    return null;
  }

  if (method === "POST") toast.success(data?.message || "Added successfully!");
  if (method === "PATCH" || method === "PUT")
    toast.success(data?.message || "Updated successfully!");
  if (method === "DELETE")
    toast.success(data?.message || "Deleted successfully!");

  return data;
};

const createRequest =
  (method) =>
  async (url, data = null) => {
    const isForm = data instanceof FormData;

    const res = await fetch(url, {
      method,
      body: data ? (isForm ? data : JSON.stringify(data)) : undefined,
      headers: isForm ? {} : { "Content-Type": "application/json" },
    });

    return handleResponse(res, method);
  };

export const get = createRequest("GET");
export const post = createRequest("POST");
export const patch = createRequest("PATCH");
export const put = createRequest("PUT");
export const del = createRequest("DELETE");

export const apiService = { get, post, patch, put, delete: del };
