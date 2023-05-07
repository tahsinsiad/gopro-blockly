import React from 'react';
import { Block, Category, Value, Field, Shadow, Sep, Mutation } from './blocks';
import Blockly, { Workspace } from 'blockly/core';
import 'blockly/blocks';
import locale from 'blockly/msg/en';
Blockly.setLocale(locale);
import './officialMsg';

export const Xml = React.forwardRef(function(props, ref) {
  return (
    <xml
      ref={ref}
      is="blockly"
      xmlns="https://developers.google.com/blockly/xml"
      style={{ display: 'none' }}
    >
      {props.children}
    </xml>
  );
});

export const officialToolbox = (
  <React.Fragment>
    <Category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">
      <Block type="controls_if" />
      <Block type="logic_compare" />
      {/* <Block type="logic_operation" />
      <Block type="logic_negate" />
      <Block type="logic_boolean" />
      <Block type="logic_null" />
      <Block type="logic_ternary" /> */}
    </Category>
    {/* <Category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">
      <Block type="controls_repeat_ext">
        <Value name="TIMES">
          <Shadow type="math_number">
            <Field name="NUM">10</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="controls_whileUntil" />
      <Block type="controls_for">
        <Value name="FROM">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="TO">
          <Shadow type="math_number">
            <Field name="NUM">10</Field>
          </Shadow>
        </Value>
        <Value name="BY">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="controls_forEach" />
      <Block type="controls_flow_statements" />
    </Category> */}
    <Category name="%{BKY_CATMATH}" colour="%{BKY_MATH_HUE}">
      <Block type="math_number">
        <Field name="NUM">0</Field>
      </Block>
      <Block type="basic_math_op" />
      <Block type="special_math_op" />
      {/* <Block type="math_arithmetic">
        <Value name="A">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="B">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_single">
        <Value name="NUM">
          <Shadow type="math_number">
            <Field name="NUM">9</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_trig">
        <Value name="NUM">
          <Shadow type="math_number">
            <Field name="NUM">45</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_constant" />
      <Block type="math_number_property">
        <Value name="NUMBER_TO_CHECK">
          <Shadow type="math_number">
            <Field name="NUM">0</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_round">
        <Value name="NUM">
          <Shadow type="math_number">
            <Field name="NUM">3.1</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_on_list" />
      <Block type="math_modulo">
        <Value name="DIVIDEND">
          <Shadow type="math_number">
            <Field name="NUM">64</Field>
          </Shadow>
        </Value>
        <Value name="DIVISOR">
          <Shadow type="math_number">
            <Field name="NUM">10</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_constrain">
        <Value name="VALUE">
          <Shadow type="math_number">
            <Field name="NUM">50</Field>
          </Shadow>
        </Value>
        <Value name="LOW">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="HIGH">
          <Shadow type="math_number">
            <Field name="NUM">100</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_random_int">
        <Value name="FROM">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="TO">
          <Shadow type="math_number">
            <Field name="NUM">100</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_random_float" />
      <Block type="math_atan2">
        <Value name="X">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="Y">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
      </Block> */}
    </Category>
    <Category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
      {/* <Block type="text" />
      <Block type="text_join" />
      <Block type="text_append">
        <Value name="TEXT">
          <Shadow type="text" />
        </Value>
      </Block>
      <Block type="text_length">
        <Value name="VALUE">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_isEmpty">
        <Value name="VALUE">
          <Shadow type="text">
            <Field name="TEXT" />
          </Shadow>
        </Value>
      </Block>
      <Block type="text_indexOf">
        <Value name="VALUE">
          <Block type="variables_get">
            <Field name="VAR">{'{textVariable}'}</Field>
          </Block>
        </Value>
        <Value name="FIND">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_charAt">
        <Value name="VALUE">
          <Block type="variables_get">
            <Field name="VAR">{'{textVariable}'}</Field>
          </Block>
        </Value>
      </Block>
      <Block type="text_getSubstring">
        <Value name="STRING">
          <Block type="variables_get">
            <Field name="VAR">{'{textVariable}'}</Field>
          </Block>
        </Value>
      </Block>
      <Block type="text_changeCase">
        <Value name="TEXT">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_trim">
        <Value name="TEXT">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block> */}
      <Block type="print" />
      {/* <Block type="text_prompt_ext">
        <Value name="TEXT">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block> */}
    </Category>
    {/* <Category name="%{BKY_CATLISTS}" colour="%{BKY_LISTS_HUE}">
      <Block type="lists_create_with">
        <Mutation items="0" />
      </Block>
      <Block type="lists_create_with" />
      <Block type="lists_repeat">
        <Value name="NUM">
          <Shadow type="math_number">
            <Field name="NUM">5</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="lists_length" />
      <Block type="lists_isEmpty" />
      <Block type="lists_indexOf">
        <Value name="VALUE">
          <Block type="variables_get">
            <Field name="VAR">{'{listVariable}'}</Field>
          </Block>
        </Value>
      </Block>
      <Block type="lists_getIndex">
        <Value name="VALUE">
          <Block type="variables_get">
            <Field name="VAR">{'{listVariable}'}</Field>
          </Block>
        </Value>
      </Block>
      <Block type="lists_setIndex">
        <Value name="LIST">
          <Block type="variables_get">
            <Field name="VAR">{'{listVariable}'}</Field>
          </Block>
        </Value>
      </Block>
      <Block type="lists_getSublist">
        <Value name="LIST">
          <Block type="variables_get">
            <Field name="VAR">{'{listVariable}'}</Field>
          </Block>
        </Value>
      </Block>
      <Block type="lists_split">
        <Value name="DELIM">
          <Shadow type="text">
            <Field name="TEXT">,</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="lists_sort" />
    </Category> */}
    {/* <Category name="%{BKY_CATCOLOUR}" colour="%{BKY_COLOUR_HUE}">
      <Block type="colour_picker" />
      <Block type="colour_random" />
      <Block type="colour_rgb">
        <Value name="RED">
          <Shadow type="math_number">
            <Field name="NUM">100</Field>
          </Shadow>
        </Value>
        <Value name="GREEN">
          <Shadow type="math_number">
            <Field name="NUM">50</Field>
          </Shadow>
        </Value>
        <Value name="BLUE">
          <Shadow type="math_number">
            <Field name="NUM">0</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="colour_blend">
        <Value name="COLOUR1">
          <Shadow type="colour_picker">
            <Field name="COLOUR">#ff0000</Field>
          </Shadow>
        </Value>
        <Value name="COLOUR2">
          <Shadow type="colour_picker">
            <Field name="COLOUR">#3333ff</Field>
          </Shadow>
        </Value>
        <Value name="RATIO">
          <Shadow type="math_number">
            <Field name="NUM">0.5</Field>
          </Shadow>
        </Value>
      </Block>
    </Category> */}
    <Sep />
    {/* <Category
      name="%{BKY_CATVARIABLES}"
      colour="%{BKY_VARIABLES_HUE}"
      custom="VARIABLE"
    /> */}
    {/* <Category
      name="%{BKY_CATFUNCTIONS}"
      colour="%{BKY_PROCEDURES_HUE}"
      custom="PROCEDURE"
    /> */}
  </React.Fragment>
);
