export const formatStringToSearch = (string: string) => {
  let stringSplit = string.split(' ');
  let stringJoin = stringSplit.join('+');

  return stringJoin;
};
