export function formatDate(dateTime: string): string {
    const date = new Date(dateTime);
  
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    const formattedDate = date.toLocaleString("en-US", options);
  
    return formattedDate;
  }
  
  export function formatToIsoDate(dateTime: string) {
    const date = new Date(dateTime);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }