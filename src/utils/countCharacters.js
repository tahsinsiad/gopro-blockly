export const countCharacters = (code) => {
  let res = '';
  const charCount = [];
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '[') {
      charCount.push(i);
    } else if (code[i] === ']') {
      const trailingPlus = charCount.length > 1 ? '+' : '';
      res += `!R${charCount.pop()}${trailingPlus}`;
    } else {
      res += code[i];
    }
  }
  return res;
};
