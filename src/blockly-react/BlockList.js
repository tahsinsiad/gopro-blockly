import React, { useContext } from 'react';
import { BlocklyContext } from '../context/BlocklyContextProvider';

const BlockList = () => {
  const blocklyContext = useContext(BlocklyContext);
  const {
    blocksList,
    blockTitle,
    selectedBlock,
    setSelectedBlock,
    setBlocksList,
    setBlockTitle,
  } = blocklyContext || {};
  console.log(blocksList, JSON.parse(localStorage.getItem('blocks')));
  const renderBlockList = () =>
    blocksList?.map((block) => (
      <div className='listItem' key={block.id}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>
          {block.name}
        </span>
        <div className='listItemActionButtonWrapper'>
          <button className='listItemActionButton'>Edit</button>
          <button className='listItemActionButton'>Delete</button>
        </div>
      </div>
    ));
  return <div className='listWrapper'>{renderBlockList()}</div>;
};

export default BlockList;
