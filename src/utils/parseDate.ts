export const parseDate = (date: Date): string => {
  return new Date(date).toLocaleDateString();
};
