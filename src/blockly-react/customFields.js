import React from 'react';
const h = React.createElement;

import * as Blockly from 'blockly/core';

export class BlocklyReactField extends Blockly.Field {
  SERIALIZABLE = true;

  static fromJson(options) {
    return new BlocklyReactField(options['text']);
  }

  initView() {
    super.initView();
  }

  dispose() {
    super.dispose();
  }
}

Blockly.fieldRegistry.register('field_react_component', BlocklyReactField);
