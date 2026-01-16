import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { slugs } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTechnologiesIcons () {
  return (
    slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`)
  )
}