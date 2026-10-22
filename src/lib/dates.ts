const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatMonth(value: string): string {
  const match = /^(\d{4})[.-](\d{2})$/.exec(value);
  if (!match) return value;
  const month = Number(match[2]);
  return month >= 1 && month <= 12 ? `${months[month - 1]} ${match[1]}` : value;
}
