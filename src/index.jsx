import React, { useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BlocklyComponent, OnUpdated } from './blockly-react/blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { QRCodeCanvas } from '@cheprasov/qrcode';
import Blockly from 'blockly/core';
import 'normalize.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import BlocklyContextProvider, {
  BlocklyContext,
} from './context/BlocklyContextProvider';
import BlockList from './blockly-react/BlockList';

function App() {
  const localStorageBlockList = localStorage.getItem('blocks') ? JSON.parse(localStorage.getItem('blocks')) : [];
  const blocklyContext = useContext(BlocklyContext);
  const {
    blocksList,
    blockTitle,
    selectedBlock,
    setSelectedBlock,
    setBlocksList,
    setBlockTitle,
  } = blocklyContext || {};
  const [open, setOpen] = useState(false);
  const [changes, setChanges] = useState('');
  const [Workspace, setWorkSpace] = useState('');
  const [openHistoryModal, setOpenHistoryModal] = useState(false);
  const onOpenModal = () => {
    const clonedBlocks = [...blocksList];
    const xml = Blockly.Xml.workspaceToDom(Workspace);
    const xml_text = Blockly.Xml.domToText(xml);
    const code = javascriptGenerator.workspaceToCode(Workspace);
    const qrCanvas = new QRCodeCanvas(code);
    const targetItemIndex = clonedBlocks?.findIndex(cb => cb?.id === selectedBlock?.id);
    if (targetItemIndex > -1) {
      clonedBlocks[targetItemIndex] = { ...clonedBlocks[targetItemIndex], block: xml_text, command: code };
    } else {
      clonedBlocks.push({ id: generateUUID(), title: blockTitle, block: xml_text, command: code });
    }
    localStorage.setItem('blocks', JSON.stringify(clonedBlocks));
    setBlocksList(clonedBlocks);
    // window.history.replaceState(null, null, "?arg=123");
    setOpen(true);
    setChanges(qrCanvas.toDataUrl());
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const handleCreateNewBlock = () => {
    setWorkSpace('');
    setBlockTitle('New Block');
    setChanges('');
    setSelectedBlock(null);
  }

  const handleManageHistory = () => {
    setOpenHistoryModal(true);
  }

  return (
    <BlocklyContextProvider localStorageBlockList={localStorageBlockList}>
      <div>
        <h1>GO PRO BLOCKLY</h1>
        <div className='actionButtonWrapper'>
          <div className='inputwrapper'>
            <input className='titleInput' type='text' />
            {/* <button className='actionButton saveButton' onClick={onOpenModal}>
              Update
            </button> */}
          </div>
          <div className='inputWrapper'>
            <button
              className='actionBUtton generateQrCodeBtn'
              disabled={!changes}
              onClick={onOpenModal}
            >
              Save & Generate Qr
            </button>
            <button className='actionButton saveButton' onClick={handleCreateNewBlock}>
              Create Block
            </button>
            <button
              className='actionButton historyButton'
              onClick={handleManageHistory}
            >
              History
            </button>
          </div>
        </div>
        <BlocklyComponent style={{ height: '100vh' }}>
          <OnUpdated
            onMounted={(ws) => {
              try {
                const xml_text = localStorage.getItem('__ws_save');
                const xml = Blockly.Xml.textToDom(xml_text);
                // Blockly.Xml.domToWorkspace(xml, ws);
              } catch (e) {
                console.log(e);
              }
            }}
            onUpdated={(e, ws) => {
              if (!e.recordUndo) return;
              setWorkSpace(ws);

              const xml = Blockly.Xml.workspaceToDom(ws);
              const xml_text = Blockly.Xml.domToText(xml);
              localStorage.setItem('__ws_save', xml_text);
            }}
          />
        </BlocklyComponent>
        <Modal
          open={open}
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
          <BlockList />
        </Modal>
      </div>
    </BlocklyContextProvider>
  );
}

render(<App />, document.getElementById('root'));
