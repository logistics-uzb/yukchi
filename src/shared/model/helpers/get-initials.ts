export function getInitials(fullName: string): string {
  if (!fullName) return "";

  return fullName
    .trim()
    .split(/\s+/) // split by spaces (handles multiple spaces)
    .map((word) => word[0]) // take first letter of each word
    .join("") // combine letters
    .substring(0, 2) // return only first 2 initials
    .toUpperCase(); // make them uppercase
}
