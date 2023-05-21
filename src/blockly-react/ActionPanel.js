import React, { useContext, useState } from 'react';
import { javascriptGenerator } from 'blockly/javascript';
import { QRCodeCanvas } from '@cheprasov/qrcode';
import Blockly from 'blockly/core';
import { BlocklyContext } from '../context/BlocklyContextProvider';
import { generateUUID } from '../utils/generateUUID';
import Modal from 'react-responsive-modal';
import BlockList from './BlockList';

const ActionPanel = () => {
  const blocklyContext = useContext(BlocklyContext);
  const {
    blocksList,
    blockTitle,
    selectedBlock,
    openModal,
    openHistoryModal,
    workspace,
    changes,
    isSaveBtnEnable,
    setIsSaveBtnEnable,
    setChanges,
    setOpenModal,
    setOpenHistoryModal,
    setWorkSpace,
    setSelectedBlock,
    setBlocksList,
    setBlockTitle,
  } = blocklyContext || {};

  const onOpenModal = () => {
    debugger;
    const clonedBlocks = [...blocksList];
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xml_text = Blockly.Xml.domToText(xml);
    const code = javascriptGenerator.workspaceToCode(workspace);
    const qrCanvas = new QRCodeCanvas(code);
    const targetItemIndex = clonedBlocks?.findIndex(
      (cb) => cb?.id === selectedBlock?.id
    );
    if (targetItemIndex > -1) {
      clonedBlocks[targetItemIndex] = {
        ...clonedBlocks[targetItemIndex],
        name: blockTitle,
        block: xml_text,
        command: code,
      };
    } else {
      clonedBlocks.push({
        id: generateUUID(),
        name: blockTitle,
        block: xml_text,
        command: code,
      });
    }
    localStorage.setItem('blocks', JSON.stringify(clonedBlocks));
    setChanges(qrCanvas.toDataUrl());
    setBlocksList(clonedBlocks);
    setOpenModal(true);
  };

  const handleCreateNewBlock = () => {
    window.history.replaceState({}, document.title, '/');

    workspace.clear();
    setWorkSpace(workspace);
    setBlockTitle('New Block');
    setChanges('');
    setIsSaveBtnEnable(false);
    setSelectedBlock(null);
  };

  const handleManageHistory = () => {
    setOpenHistoryModal(true);
  };

  const handleChangeBlockTitle = (e) => {
    setBlockTitle(e.target.value);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  console.log(
    workspace,
    workspace && workspace.getAllBlocks && workspace.getAllBlocks(false)
  );
  return (
    <div className='actionButtonWrapper'>
      <div className='inputwrapper'>
        <input
          className='titleInput'
          type='text'
          value={blockTitle}
          onChange={handleChangeBlockTitle}
        />
        {/* <button className='actionButton saveButton' onClick={onOpenModal}>
            Update
          </button> */}
      </div>
      <div className='inputWrapper'>
        <button
          className='actionBUtton generateQrCodeBtn'
          onClick={onOpenModal}
          disabled={!isSaveBtnEnable}
        >
          Save & Generate Qr
        </button>
        <button
          className='actionButton saveButton'
          onClick={handleCreateNewBlock}
        >
          Create Block
        </button>
        <button
          className='actionButton historyButton'
          onClick={handleManageHistory}
        >
          History
        </button>
      </div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'customModal',
        }}
      >
        <div className='qrGeneratorWrapper'>
          <p className='heading'>Here is your Qr Code</p>
          <img alt='Qr code' src={changes} />
        </div>
      </Modal>
      <Modal
        open={openHistoryModal}
        onClose={() => setOpenHistoryModal(false)}
        center
        classNames={{
          modal: 'customModal',
        }}
      >
        <BlockList onCloseHistoryModal={() => setOpenHistoryModal(false)} />
      </Modal>
    </div>
  );
};
export default ActionPanel;
