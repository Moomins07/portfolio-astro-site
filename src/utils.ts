// Format date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalise first letter of string
function capitalise(str: string): string {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}

export { formatDate, capitalise };
