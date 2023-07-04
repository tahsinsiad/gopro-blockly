export const generateGoProCmd = (cmd) => {
  const hasLength = cmd?.length;
  let cloneCmd = `${cmd}`;
  if (hasLength && cloneCmd[hasLength - 1] === '+') {
    cloneCmd = cloneCmd.substring(0, hasLength - 1);
  }
  return hasLength ? cloneCmd.replace(/;/g, '') : '';
};
