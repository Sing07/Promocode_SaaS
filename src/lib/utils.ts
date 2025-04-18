import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function removeTrailingSlash(path: string) {
    return path.replace(/\/$/, "");
}

export function createURL(
  href: string,
  oldParams: Record<string, string | undefined>,
  newParams: Record<string, string | undefined>
) {
  const params = new URLSearchParams();

  // Add oldParams
  Object.entries(oldParams).forEach(([key, value]) => {
    if (value !== undefined) {
      params.set(key, value);
    }
  });

  // Apply newParams (overrides or deletes)
  Object.entries(newParams).forEach(([key, value]) => {
    if (value === undefined) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  });

  return `${href}?${params.toString()}`;
}
