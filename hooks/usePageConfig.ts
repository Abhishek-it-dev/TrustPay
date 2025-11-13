"use client";
import { usePathname } from "next/navigation";
import { pageRegistry } from "../config/pageRegistry";

/**
 * Returns the page config object for the current pathname.
 * - Normalizes trailing slashes.
 * - Tries exact match first, then longest-prefix match (useful for nested/dynamic routes).
 */
export default function usePageConfig() {
  const pathname = usePathname();
  const normalize = (p: string) => p.replace(/\/$/, ''); 
  const route = normalize(pathname);

  // exact match
  if (pageRegistry[route]) return pageRegistry[route];

  // fallback: longest-prefix match (e.g. /products/123 -> /products)
  const keys = Object.keys(pageRegistry).sort((a, b) => b.length - a.length);
   const matchedKey = keys.find(k => route.startsWith(normalize(k)))
  return matchedKey ? pageRegistry[matchedKey] : null;
}