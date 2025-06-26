import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// This would be expanded with actual plagiarism detection algorithms in a real implementation
export function calculateTextSimilarity(text1: string, text2: string): number {
  // This is a placeholder for a real similarity algorithm
  // In a real implementation, you would use more sophisticated methods like:
  // - Cosine similarity
  // - Jaccard similarity
  // - Levenshtein distance
  // - Or machine learning based approaches

  // Simple character-based similarity for demonstration
  const longer = text1.length > text2.length ? text1 : text2
  const shorter = text1.length > text2.length ? text2 : text1

  if (longer.length === 0) {
    return 1.0
  }

  // Count matching characters
  let matches = 0
  for (let i = 0; i < shorter.length; i++) {
    if (shorter[i] === longer[i]) {
      matches++
    }
  }

  return (matches / longer.length) * 100
}
