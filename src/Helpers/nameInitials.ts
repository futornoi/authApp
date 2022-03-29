export const getFirstLetters = (name: string) => {
  const nameArray = name.split(' ');
  return nameArray
    .map((n, i) => n[i].toUpperCase()[0])
    .join('')
    .slice(0, 2);
};
