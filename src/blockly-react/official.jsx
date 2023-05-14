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
      {/* <Block type="controls_if" />
      <Block type="logic_compare" /> */}
      {/* <Block type="custom_if" />
      <Block type="custom_else"/> */}
      <Block type="customized_if_else" />
      <Block type="customized_logic_compare" />
    </Category>
    <Category name="%{BKY_CATMATH}" colour="%{BKY_MATH_HUE}">
      <Block type="math_number">
        <Field name="NUM">0</Field>
      </Block>
      <Block type="basic_math_op" />
      <Block type="special_math_op" />
    </Category>
    <Category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
      <Block type="print" />
    </Category>
  </React.Fragment>
);
