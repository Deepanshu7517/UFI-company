export const formatDate = (dateInput: Date | string | number): string => {
  const date = new Date(dateInput);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}-${month}-${year}`;
};

/**
 * Formats date and time for the footer (DD-MM-YYYY HH:mm:ss)
 */
export const formatTime = (dateInput: Date): string => {
  const time = dateInput.toTimeString().split(' ')[0];
  return `${time}`;
};