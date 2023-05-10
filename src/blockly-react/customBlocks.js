import Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
// javascriptGenerator.ORDER_ATOMIC = 0; // 0 "" ...
// javascriptGenerator.ORDER_NEW = 1.1; // new
// javascriptGenerator.ORDER_MEMBER = 1.2; // . []
// javascriptGenerator.ORDER_FUNCTION_CALL = 2; // ()
// javascriptGenerator.ORDER_INCREMENT = 3; // ++
// javascriptGenerator.ORDER_DECREMENT = 3; // --
// javascriptGenerator.ORDER_BITWISE_NOT = 4.1; // ~
// javascriptGenerator.ORDER_UNARY_PLUS = 4.2; // +
// javascriptGenerator.ORDER_UNARY_NEGATION = 4.3; // -
// javascriptGenerator.ORDER_LOGICAL_NOT = 4.4; // !
// javascriptGenerator.ORDER_TYPEOF = 4.5; // typeof
// javascriptGenerator.ORDER_VOID = 4.6; // void
// javascriptGenerator.ORDER_DELETE = 4.7; // delete
// javascriptGenerator.ORDER_AWAIT = 4.8; // await
// javascriptGenerator.ORDER_EXPONENTIATION = 5.0; // **
// javascriptGenerator.ORDER_MULTIPLICATION = 5.1; // *
// javascriptGenerator.ORDER_DIVISION = 5.2; // /
// javascriptGenerator.ORDER_MODULUS = 5.3; // %
// javascriptGenerator.ORDER_SUBTRACTION = 6.1; // -
// javascriptGenerator.ORDER_ADDITION = 6.2; // +
// javascriptGenerator.ORDER_BITWISE_SHIFT = 7; // << >> >>>
// javascriptGenerator.ORDER_RELATIONAL = 8; // < <= > >=
// javascriptGenerator.ORDER_IN = 8; // in
// javascriptGenerator.ORDER_INSTANCEOF = 8; // instanceof
// javascriptGenerator.ORDER_EQUALITY = 9; // == != === !==
// javascriptGenerator.ORDER_BITWISE_AND = 10; // &
// javascriptGenerator.ORDER_BITWISE_XOR = 11; // ^
// javascriptGenerator.ORDER_BITWISE_OR = 12; // |
// javascriptGenerator.ORDER_LOGICAL_AND = 13; // &&
// javascriptGenerator.ORDER_LOGICAL_OR = 14; // ||
// javascriptGenerator.ORDER_CONDITIONAL = 15; // ?:
// javascriptGenerator.ORDER_ASSIGNMENT = 16; // = += -= **= *= /= %= <<= >>= ...
// javascriptGenerator.ORDER_YIELD = 17; // yield
// javascriptGenerator.ORDER_COMMA = 18; // ,
// javascriptGenerator.ORDER_NONE = 99; // (...)

import { BlocklyReactField } from './customFields';
import { getOperatorsAndVariables } from '../utils/findOperatorFromString';
import { getHourMinuteFromProp } from '../utils/timeUtils';

Blockly.Blocks['bp_gopro_start'] = {
  init: function () {
    this.appendDummyInput().appendField('Start');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('改变数值组件的数值');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_gopro_end'] = {
  init: function () {
    this.appendDummyInput().appendField('End');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('改变数值组件的数值');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_gopro_upload'] = {
  init: function () {
    this.appendDummyInput().appendField('Upload');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('改变数值组件的数值');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_gopro_repeat'] = {
  init: function () {
    this.appendDummyInput().appendField('Repeat');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('改变数值组件的数值');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['bp_tile_setamount'] = {
  init: function () {
    this.appendDummyInput().appendField('Start');
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

Blockly.Blocks['set_var'] = {
  init: function () {
    this.appendValueInput('set_user_defined_val')
      .setCheck(null)
      .appendField('set the value of')
      .appendField(
        new Blockly.FieldDropdown([
          ['A', 'A'],
          ['B', 'B'],
          ['C', 'C'],
          ['D', 'D'],
          ['E', 'E'],
          ['F', 'F'],
          ['G', 'G'],
        ]),
        'USER_DEFINED_VAR'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['set_var'] = function (block) {
  var dropdown_name = block.getFieldValue('USER_DEFINED_VAR');
  var value_set_var = javascriptGenerator.valueToCode(
    block,
    'set_user_defined_val',
    javascriptGenerator.ORDER_ATOMIC
  );

  const goProCmd = `=${dropdown_name}${value_set_var}`;
  console.log(value_set_var, goProCmd);
  // TODO: Assemble JavaScript into code variable.
  // var code = '...;\n';
  return goProCmd;
};

Blockly.Blocks['set_var_system'] = {
  init: function () {
    this.appendValueInput('set_system_defined_val')
      .setCheck(null)
      .appendField('set the value of')
      .appendField(
        new Blockly.FieldDropdown([
          ['accelaration', 'a'],
          ['gyro', 'g'],
          ['iso value', 'i'],
          ['shutter speed', 's'],
        ]),
        'SYSTEM_DEFINED_VAR'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['set_var_system'] = function (block) {
  var dropdown_name = block.getFieldValue('SYSTEM_DEFINED_VAR');
  var value_set_var = javascriptGenerator.valueToCode(
    block,
    'set_system_defined_val',
    javascriptGenerator.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Blocks['user_defined_var_list'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['A', 'A'],
        ['B', 'B'],
        ['C', 'C'],
        ['D', 'D'],
        ['E', 'E'],
        ['F', 'F'],
        ['G', 'G'],
      ]),
      'USER_DEFINED_VAR_LIST'
    );
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['user_defined_var_list'] = function (block) {
  var dropdown_name = block.getFieldValue('USER_DEFINED_VAR_LIST');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['system_defined_var_list'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['accelaration', 'a'],
        ['gyro', 'g'],
        ['iso value', 'i'],
        ['shutter speed', 's'],
      ]),
      'SYSTEM_DEFINED_VAR_LIST'
    );
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['number_input'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldNumber(0),
      'number_input'
    );
    this.setOutput(true, 'Number');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['number_input'] = function (block) {
  var number_name = block.getFieldValue('number_input');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['basic_math_op'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['+', '+'],
        ['-', '-'],
        ['*', '*'],
        ['/', '/'],
        ['^', '^'],
      ]),
      'math_op'
    );
    this.appendValueInput('VAR_B').setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['special_math_op'] = {
  init: function () {
    this.appendValueInput('VAR_A')
      .setCheck('Number')
      .appendField(
        new Blockly.FieldDropdown([['log', '#']]),
        'special_math_ops'
      );
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['print'] = {
  init: function () {
    this.appendValueInput('print').setCheck(null).appendField('print');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['print'] = function (block) {
  var value_print = javascriptGenerator.valueToCode(
    block,
    'print',
    javascriptGenerator.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `"Value is $${value_print}"`;
  return code;
};

javascriptGenerator['special_math_op'] = function (block) {
  var dropdown_special_math_ops = block.getFieldValue('special_math_ops');
  var value_name = javascriptGenerator.valueToCode(
    block,
    'VAR_A',
    javascriptGenerator.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_special_math_ops}${value_name}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator['basic_math_op'] = function (block) {
  var dropdown_math_op = block.getFieldValue('math_op');
  var value_var_b = javascriptGenerator.valueToCode(
    block,
    'VAR_B',
    javascriptGenerator.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_math_op}${value_var_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator['system_defined_var_list'] = function (block) {
  var dropdown_name = block.getFieldValue('SYSTEM_DEFINED_VAR_LIST');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  // console.log(dropdown_name);
  // return dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator['bp_gopro_start'] = function (block) {
  var code = `!S`;
  return code;
};

javascriptGenerator['bp_gopro_end'] = function (block) {
  var code = `!E`;
  return code;
};

javascriptGenerator['bp_gopro_upload'] = function (block) {
  var code = `!U`;
  return code;
};
javascriptGenerator['bp_gopro_repeat'] = function (block) {
  var code = `!R`;
  return code;
};

javascriptGenerator['controls_if'] = function (block) {
  // If/elseif/else condition.
  let n = 0;
  let code = '';
  let conditionCode = '';
  let branchCode = '';
  if (javascriptGenerator.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    code += javascriptGenerator.injectId(
      javascriptGenerator.STATEMENT_PREFIX,
      block
    );
  }
  do {
    conditionCode =
      javascriptGenerator.valueToCode(
        block,
        'IF' + n,
        javascriptGenerator.ORDER_NONE
      ) || 'false';
    branchCode = javascriptGenerator.statementToCode(block, 'DO' + n);
    if (javascriptGenerator.STATEMENT_SUFFIX) {
      branchCode =
        javascriptGenerator.prefixLines(
          javascriptGenerator.injectId(
            javascriptGenerator.STATEMENT_SUFFIX,
            block
          ),
          javascriptGenerator.INDENT
        ) + branchCode;
    }
    code +=
      (n > 0 ? ' else ' : '') +
      'if (' +
      conditionCode +
      ') {\n' +
      branchCode +
      '}';

    // console.log(block);
    // const { variables, operators } = getOperatorsAndVariables(conditionCode);
    // console.log(variables, operators);

    // console.log(
    //   'conditionCode',
    //   `${conditionCode[2]}${conditionCode[3]}${conditionCode[0]}${
    //     conditionCode.split(conditionCode[2] + conditionCode[3])[1]
    //   }`
    // );

    n++;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE') || javascriptGenerator.STATEMENT_SUFFIX) {
    let branchCode = javascriptGenerator.statementToCode(block, 'ELSE');
    if (javascriptGenerator.STATEMENT_SUFFIX) {
      branchCode =
        javascriptGenerator.prefixLines(
          javascriptGenerator.injectId(
            javascriptGenerator.STATEMENT_SUFFIX,
            block
          ),
          javascriptGenerator.INDENT
        ) + branchCode;
    }
    code += ' else {\n' + branchCode + '}';
  }
  // console.log(code);
  const { variables, operators } = getOperatorsAndVariables(conditionCode);
  const isTime = variables[0].includes('time');
  const variableValue = variables[variables.length - 1].trim();
  const operatorName = `${variables[0][0]}`;
  const { hour, minute } = getHourMinuteFromProp(+variableValue);
  const cmd = isTime ? `${hour}:${minute}` : `${operatorName}${variableValue}`;
  const fullCmd = `${operators[0]}${cmd}${branchCode.trim()}`;
  console.log('full: ', fullCmd);
  const prev = localStorage.getItem('goProCmd') || '';
  localStorage.setItem('goProCmd', prev + fullCmd);
  // window.goProCmd = window.goProCmd + fullCmd;
  return fullCmd;
};

javascriptGenerator['bp_tile_setamount'] = function (block) {
  var value_tile =
    javascriptGenerator.valueToCode(
      block,
      'TILE',
      javascriptGenerator.ORDER_NONE
    ) || 'null';
  var value_amount =
    javascriptGenerator.valueToCode(
      block,
      'AMOUNT',
      javascriptGenerator.ORDER_NONE
    ) || '0';
  var code = `setAmount(${value_tile}, ${value_amount});\n`;
  return code;
};

javascriptGenerator['bp_tile_getamount'] = function (block) {
  var value_tile =
    javascriptGenerator.valueToCode(
      block,
      'TILE',
      javascriptGenerator.ORDER_NONE
    ) || 'null';
  var code = `getAmount(${value_tile})`;
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

javascriptGenerator['bp_tile_pick'] = function (block) {
  var dropdown_tile = block.getFieldValue('TILE');
  // TODO: Assemble javascriptGenerator into code variable.
  var code = `!${dropdown_tile.replace(/:/g, '')}S`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

javascriptGenerator['bp_tile_pick_quickly'] = function (block) {
  var dropdown_tile = block.getFieldValue('TILE');
  // TODO: Assemble javascriptGenerator into code variable.
  var code = `!${dropdown_tile.replace(/:/g, '')}SQ`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

javascriptGenerator['bp_tile_move'] = function (block) {
  var value_tile_from = javascriptGenerator.valueToCode(
    block,
    'TILE_FROM',
    javascriptGenerator.ORDER_NONE
  );
  var value_tile_to = javascriptGenerator.valueToCode(
    block,
    'TILE_TO',
    javascriptGenerator.ORDER_NONE
  );
  var value_amount = javascriptGenerator.valueToCode(
    block,
    'AMOUNT',
    javascriptGenerator.ORDER_NONE
  );
  // TODO: Assemble javascriptGenerator into code variable.
  var code = `moveTileContent(${value_tile_from}, ${value_tile_to}, ${value_amount});\n`;
  return code;
};

javascriptGenerator['bp_tile_command'] = function (block) {
  var value_tile = javascriptGenerator.valueToCode(
    block,
    'TILE',
    javascriptGenerator.ORDER_NONE
  );
  var dropdown_command = block.getFieldValue('COMMAND');
  // TODO: Assemble javascriptGenerator into code variable.
  var code = `sendTileCommand(${value_tile}, "${dropdown_command}");\n`;
  return code;
};

javascriptGenerator['bp_tile_onchange'] = function (block) {
  var value_tile = javascriptGenerator.valueToCode(
    block,
    'TILE',
    javascriptGenerator.ORDER_NONE
  );
  var statements_callback = javascriptGenerator.statementToCode(
    block,
    'CALLBACK'
  );
  statements_callback = statements_callback.replace('\n', '  \n');
  var code = `onTileChange(${value_tile}, () => {\n${statements_callback}});\n`;
  return code;
};

javascriptGenerator['bp_tile_trigger'] = function (block) {
  var text_trigger = block.getFieldValue('TRIGGER');
  var statements_callback = javascriptGenerator.statementToCode(
    block,
    'ONTRIGGER'
  );
  statements_callback = statements_callback.replace('\n', '  \n');
  // TODO: Assemble javascriptGenerator into code variable.
  var code = `onTileTrigger("${text_trigger}", () => {\n${statements_callback}});\n`;
  return code;
};
