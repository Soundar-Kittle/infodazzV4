import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const cleanData = (data) => {
  const cleanedData = {};

  for (const [key, value] of Object.entries(data)) {
    if (
      value === null ||
      value === undefined ||
      value === "undefined" ||
      value === "null"
    ) {
      cleanedData[key] = null;
    } else if (typeof value === "string") {
      const trimmedValue = value.trim();
      cleanedData[key] = trimmedValue.length > 0 ? trimmedValue : null;
    } else if (typeof value === "number" || typeof value === "boolean") {
      cleanedData[key] = value;
    }
  }

  return cleanedData;
};
