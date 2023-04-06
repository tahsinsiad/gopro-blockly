import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BlocklyComponent, OnUpdated } from './blockly-react/blockly';
import 'blockly/javascript';
import Blockly from 'blockly/core';
import 'normalize.css';

function App() {
  return (
    <BlocklyComponent style={{ height: '100vh' }}>
      <OnUpdated
        onMounted={ws => {
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

          const code = Blockly.JavaScript.workspaceToCode(ws);
          console.log(code);

          const xml = Blockly.Xml.workspaceToDom(ws);
          const xml_text = Blockly.Xml.domToText(xml);
          localStorage.setItem('__ws_save', xml_text);
        }}
      />
    </BlocklyComponent>
  );
}

render(<App />, document.getElementById('root'));
