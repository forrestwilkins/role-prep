export const pluralize = (size: number): string => {
  if (size === 0 || size > 1) return "s";
  return "";
};
