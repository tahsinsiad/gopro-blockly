import { default as BlocklyCore } from 'blockly/core';
import JavaScript from 'blockly/javascript';
const Blockly = { JavaScript, ...BlocklyCore };
Blockly.JavaScript.ORDER_ATOMIC = 0; // 0 "" ...
Blockly.JavaScript.ORDER_NEW = 1.1; // new
Blockly.JavaScript.ORDER_MEMBER = 1.2; // . []
Blockly.JavaScript.ORDER_FUNCTION_CALL = 2; // ()
Blockly.JavaScript.ORDER_INCREMENT = 3; // ++
Blockly.JavaScript.ORDER_DECREMENT = 3; // --
Blockly.JavaScript.ORDER_BITWISE_NOT = 4.1; // ~
Blockly.JavaScript.ORDER_UNARY_PLUS = 4.2; // +
Blockly.JavaScript.ORDER_UNARY_NEGATION = 4.3; // -
Blockly.JavaScript.ORDER_LOGICAL_NOT = 4.4; // !
Blockly.JavaScript.ORDER_TYPEOF = 4.5; // typeof
Blockly.JavaScript.ORDER_VOID = 4.6; // void
Blockly.JavaScript.ORDER_DELETE = 4.7; // delete
Blockly.JavaScript.ORDER_AWAIT = 4.8; // await
Blockly.JavaScript.ORDER_EXPONENTIATION = 5.0; // **
Blockly.JavaScript.ORDER_MULTIPLICATION = 5.1; // *
Blockly.JavaScript.ORDER_DIVISION = 5.2; // /
Blockly.JavaScript.ORDER_MODULUS = 5.3; // %
Blockly.JavaScript.ORDER_SUBTRACTION = 6.1; // -
Blockly.JavaScript.ORDER_ADDITION = 6.2; // +
Blockly.JavaScript.ORDER_BITWISE_SHIFT = 7; // << >> >>>
Blockly.JavaScript.ORDER_RELATIONAL = 8; // < <= > >=
Blockly.JavaScript.ORDER_IN = 8; // in
Blockly.JavaScript.ORDER_INSTANCEOF = 8; // instanceof
Blockly.JavaScript.ORDER_EQUALITY = 9; // == != === !==
Blockly.JavaScript.ORDER_BITWISE_AND = 10; // &
Blockly.JavaScript.ORDER_BITWISE_XOR = 11; // ^
Blockly.JavaScript.ORDER_BITWISE_OR = 12; // |
Blockly.JavaScript.ORDER_LOGICAL_AND = 13; // &&
Blockly.JavaScript.ORDER_LOGICAL_OR = 14; // ||
Blockly.JavaScript.ORDER_CONDITIONAL = 15; // ?:
Blockly.JavaScript.ORDER_ASSIGNMENT = 16; // = += -= **= *= /= %= <<= >>= ...
Blockly.JavaScript.ORDER_YIELD = 17; // yield
Blockly.JavaScript.ORDER_COMMA = 18; // ,
Blockly.JavaScript.ORDER_NONE = 99; // (...)

import { BlocklyReactField } from './customFields';

Blockly.Blocks['bp_tile_setamount'] = {
  init: function () {
    this.appendDummyInput().appendField('设置');
    this.appendValueInput('TILE').setCheck('Tile');
    this.appendDummyInput().appendField('的点数为');
    this.appendValueInput('AMOUNT').setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('改变数值组件的数值');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_tile_getamount'] = {
  init: function () {
    this.appendDummyInput().appendField('🧮计数');
    this.appendValueInput('TILE').setCheck('Tile');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(180);
    this.setTooltip('读取数值组件的数值，或容器组件的数目');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_tile_pick'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('🏷️ Start at')
      .appendField(new Blockly.FieldTextInput('A Tile'), 'TILE');
    this.setOutput(true, 'Tile');
    this.setColour(150);
    this.setTooltip('选取一个工作区域内的组件');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['bp_tile_pick_quickly'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('🏷️ Start quickly at')
      .appendField(new Blockly.FieldTextInput('A Tile'), 'TILE');
    this.setOutput(true, 'Tile');
    this.setColour(150);
    this.setTooltip('选取一个工作区域内的组件');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_tile_move'] = {
  init: function () {
    this.appendValueInput('TILE_FROM').setCheck('Tile').appendField('从');
    this.appendValueInput('TILE_TO').setCheck('Tile').appendField('到');
    this.appendValueInput('AMOUNT').setCheck('Number').appendField('移动');
    this.appendDummyInput().appendField('个物品');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('在容器之间移动物品');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_tile_command'] = {
  init: function () {
    this.appendValueInput('TILE').setCheck('Tile').appendField('令');
    this.appendDummyInput()
      .appendField('的所有物品执行命令')
      .appendField(
        new Blockly.FieldDropdown([
          ['🔀随机排序', 'shuffle'],
          ['🌕翻至正面', 'faceup'],
          ['🌑翻至背面', 'facedown'],
        ]),
        'COMMAND'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('操作容器内的所有物品');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_tile_onchange'] = {
  init: function () {
    this.appendValueInput('TILE').setCheck('Tile').appendField('当');
    this.appendStatementInput('CALLBACK')
      .setCheck(null)
      .appendField('内容改变时');
    this.setColour(210);
    this.setTooltip('容器内容变化时，触发程序');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_tile_trigger'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('🛎️触发')
      .appendField(new Blockly.FieldTextInput('触发'), 'TRIGGER');
    this.appendStatementInput('ONTRIGGER').setCheck(null);
    this.setColour(210);
    this.setTooltip('当按下触发按钮时，执行程序');
    this.setHelpUrl('');
  },
};

Blockly.JavaScript['bp_tile_setamount'] = function (block) {
  var value_tile =
    Blockly.JavaScript.valueToCode(
      block,
      'TILE',
      Blockly.JavaScript.ORDER_NONE
    ) || 'null';
  var value_amount =
    Blockly.JavaScript.valueToCode(
      block,
      'AMOUNT',
      Blockly.JavaScript.ORDER_NONE
    ) || '0';
  var code = `setAmount(${value_tile}, ${value_amount});\n`;
  return code;
};

Blockly.JavaScript['bp_tile_getamount'] = function (block) {
  var value_tile =
    Blockly.JavaScript.valueToCode(
      block,
      'TILE',
      Blockly.JavaScript.ORDER_NONE
    ) || 'null';
  var code = `getAmount(${value_tile})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bp_tile_pick'] = function (block) {
  var dropdown_tile = block.getFieldValue('TILE');
  // TODO: Assemble JavaScript into code variable.
  var code = `!${dropdown_tile}S`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bp_tile_pick_quickly'] = function (block) {
  var dropdown_tile = block.getFieldValue('TILE');
  // TODO: Assemble JavaScript into code variable.
  var code = `!${dropdown_tile}SQ`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bp_tile_move'] = function (block) {
  var value_tile_from = Blockly.JavaScript.valueToCode(
    block,
    'TILE_FROM',
    Blockly.JavaScript.ORDER_NONE
  );
  var value_tile_to = Blockly.JavaScript.valueToCode(
    block,
    'TILE_TO',
    Blockly.JavaScript.ORDER_NONE
  );
  var value_amount = Blockly.JavaScript.valueToCode(
    block,
    'AMOUNT',
    Blockly.JavaScript.ORDER_NONE
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `moveTileContent(${value_tile_from}, ${value_tile_to}, ${value_amount});\n`;
  return code;
};

Blockly.JavaScript['bp_tile_command'] = function (block) {
  var value_tile = Blockly.JavaScript.valueToCode(
    block,
    'TILE',
    Blockly.JavaScript.ORDER_NONE
  );
  var dropdown_command = block.getFieldValue('COMMAND');
  // TODO: Assemble JavaScript into code variable.
  var code = `sendTileCommand(${value_tile}, "${dropdown_command}");\n`;
  return code;
};

Blockly.JavaScript['bp_tile_onchange'] = function (block) {
  var value_tile = Blockly.JavaScript.valueToCode(
    block,
    'TILE',
    Blockly.JavaScript.ORDER_NONE
  );
  var statements_callback = Blockly.JavaScript.statementToCode(
    block,
    'CALLBACK'
  );
  statements_callback = statements_callback.replace('\n', '  \n');
  var code = `onTileChange(${value_tile}, () => {\n${statements_callback}});\n`;
  return code;
};

Blockly.JavaScript['bp_tile_trigger'] = function (block) {
  var text_trigger = block.getFieldValue('TRIGGER');
  var statements_callback = Blockly.JavaScript.statementToCode(
    block,
    'ONTRIGGER'
  );
  statements_callback = statements_callback.replace('\n', '  \n');
  // TODO: Assemble JavaScript into code variable.
  var code = `onTileTrigger("${text_trigger}", () => {\n${statements_callback}});\n`;
  return code;
};
