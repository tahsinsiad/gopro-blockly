import React, { createContext, useEffect, useState } from 'react';

export const BlocklyContext = createContext();

const BlocklyContextProvider = ({ children, localStorageBlockList }) => {
  const [blockTitle, setBlockTitle] = useState('New Block');
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [blocksList, setBlocksList] = useState([]);

  useEffect(() => {
    console.log(localStorageBlockList);
    const presetBlocks = localStorageBlockList?.length
      ? [...localStorageBlockList]
      : [];
    setBlocksList(presetBlocks);
  }, [localStorageBlockList]);

  return (
    <BlocklyContext.Provider
      value={{
        blockTitle,
        blocksList,
        selectedBlock,
        setSelectedBlock,
        setBlocksList,
        setBlockTitle,
      }}
    >
      {children}
    </BlocklyContext.Provider>
  );
};
export default BlocklyContextProvider;
