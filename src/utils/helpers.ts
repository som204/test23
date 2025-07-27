export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US').format(date);
};

export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}