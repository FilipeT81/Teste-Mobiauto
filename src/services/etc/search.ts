export const filteredItems = (variable: any[], searchQuery: string) => {
  return variable?.filter((item) => {
    const itemValues = Object.values(item).map((values) => {
      if (values === null || values === undefined) {
        return '';
      }
      if (typeof values === 'string') {
        return values.toLowerCase();
      }
      return values.toString().toLowerCase();
    });
    return itemValues.some((values) => values.includes(searchQuery.toLowerCase()));
  });
};
