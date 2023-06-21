export const generateAllChildrenBlocks = (block, prevChildren = []) => {
  let children = [...prevChildren];
  if (block?.childBlocks_?.length) {
    children = [...children, ...block.childBlocks_];
    children = generateAllChildrenBlocks(block?.childBlocks_[0], children);
  }
  return children;
};
