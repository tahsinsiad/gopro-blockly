import React from 'react';
import './customBlocks';
import Blockly from 'blockly/core';
import { Block, Category, Sep } from './blocks';

export const customTools = (
  <>
    <Sep />
    <Category name="%{BKY_CATBP}" colour="%{BKY_BP_HUE}">
      <Block type="started_at" />
      <Block type="started_at_quickly" />
      <Block type="time_picker" />
      <Block type="bp_gopro_start" />
      <Block type="bp_gopro_end" />
      <Block type="bp_gopro_upload" />
      <Block type="bp_gopro_repeat" />
    </Category>
    <Category name="%{BKY_GOPRO_VAR}">
      <Category name="%{BKY_USER_DEFINED_CAT}">
        <Block type="set_var" />
        <Block type="user_defined_var_list" />
      </Category>
      <Category name="%{BKY_SYSTEM_DEFINED_CAT}">
        <Block type="set_var_system" />
        <Block type="system_defined_var_list" />
      </Category>
    </Category>
  </>
);

Blockly.setLocale({
  CATBP: 'Action blocks',
  GOPRO_VAR: 'GoPro Variables',
  USER_DEFINED_CAT: 'User defined variables',
  SYSTEM_DEFINED_CAT: 'System defined variables',
  BP_HUE: 230,
});
