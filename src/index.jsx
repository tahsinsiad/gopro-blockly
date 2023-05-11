import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BlocklyComponent, OnUpdated } from './blockly-react/blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { QRCodeCanvas } from '@cheprasov/qrcode';
import Blockly from 'blockly/core';
import 'normalize.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function App() {
  const [open, setOpen] = useState(false);
  const [changes, setChanges] = useState('');
  const [Workspace, setWorkSpace] = useState('');
  const onOpenModal = () => {
    const code = javascriptGenerator.workspaceToCode(Workspace);
    console.log(code);
    const qrCanvas = new QRCodeCanvas(code);
    setOpen(true);
    setChanges(qrCanvas.toDataUrl());
  }
  const onCloseModal = () => {
    setOpen(false);
  }
  useEffect(() => {
    return () => localStorage.removeItem('goProCmd')
  }, []);
  return (
    <div>
      <h1>GO PRO BLOCKLY</h1>
      <button className='generateQrCodeBtn' onClick={onOpenModal}>Generate Qr Code</button>
      <BlocklyComponent style={{ height: '100vh' }}>
        <OnUpdated
          onMounted={(ws) => {
            try {
              const xml_text = localStorage.getItem('__ws_save');
              const xml = Blockly.Xml.textToDom(xml_text);
              Blockly.Xml.domToWorkspace(ws, xml);
            } catch (e) {
              // console.log(e);
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
      <Modal open={open} onClose={onCloseModal} center classNames={{
          modal: 'customModal',
        }}>
        <div className='qrGeneratorWrapper'>
          <p className='heading'>Here is your Qr Code</p>
          <img alt='Qr code' src={changes} />
        </div>
      </Modal>
    </div>
  );
}

render(<App />, document.getElementById('root'));
