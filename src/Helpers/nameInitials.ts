export const getFirstLetters = (name: string) => {
  const nameArray = name.split(' ');
  return nameArray
    .map((n, i) => n[0]?.toUpperCase())
    .join('')
    .slice(0, 2);
};
