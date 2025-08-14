
export const DarkTheme = 'dark';
export const LightTheme = 'light';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function getMonthName(monthIndex: number): string {
  return months[monthIndex];
}