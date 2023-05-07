import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BlocklyComponent, OnUpdated } from './blockly-react/blockly';
import { javascriptGenerator } from 'blockly/javascript';
import Blockly from 'blockly/core';
import 'normalize.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function App() {
  const [open, setOpen] = useState(false);
  const [changes, setChanges] = useState('');
  const [Workspace, setWorkSpace] = useState('');
  const onOpenModal = () => {
    // window.goProCommand = '';
    const code = javascriptGenerator.workspaceToCode(Workspace);
    setOpen(true);
    setChanges(code);
    // console.log(code);
  }
  const onCloseModal = () => {
    // window.goProCommand = '';
    localStorage.removeItem('goProCmd');
    setChanges('');
    setOpen(false);
  }
  useEffect(() => {
    return () => localStorage.removeItem('goProCmd')
  }, []);
  return (
    <div>
      <h1>GO PRO BLOCKLY</h1>
      <button onClick={onOpenModal}>SEE CODE</button>
      <BlocklyComponent style={{ height: '100vh' }}>
        <OnUpdated
          onMounted={(ws) => {
            try {
              const xml_text = localStorage.getItem('__ws_save');
              const xml = Blockly.Xml.textToDom(xml_text);
              Blockly.Xml.domToWorkspace(ws, xml);
            } catch (e) {
              console.log(e);
            }
          }}
          onUpdated={(e, ws) => {
            if (!e.recordUndo) return;
            setWorkSpace(ws);
            // const code = javascriptGenerator.workspaceToCode(ws);
            // console.log("Before: ", code.split('\n'));
            // const goProCommands = code[le]
            // setChanges());
            // const output = document.getElementById('output');
            // output.innerText = code;
            // console.log(code);

            const xml = Blockly.Xml.workspaceToDom(ws);
            const xml_text = Blockly.Xml.domToText(xml);
            localStorage.setItem('__ws_save', xml_text);
          }}
        />
      </BlocklyComponent>
      <Modal open={open} onClose={onCloseModal} center classNames={{
          modal: 'customModal',
        }}>
        <pre id="output">
          {/* {localStorage.getItem('goProCmd')} */}
          {changes}
        </pre>
      </Modal>
    </div>
  );
}

render(<App />, document.getElementById('root'));
