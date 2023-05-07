import React from 'react';
import './customBlocks';
import Blockly from 'blockly/core';
import { Block, Category, Value, Field, Shadow, Sep, Mutation } from './blocks';

export const customTools = (
  <>
    <Category name="%{BKY_CATBP}" colour="%{BKY_BP_HUE}">
      <Block type="bp_tile_pick">
        <Field name="TILE">17:00</Field>
      </Block>
      <Block type="bp_tile_pick_quickly">
        <Field name="TILE">11:00</Field>
      </Block>
      {/* <Block type="bp_tile_getamount" /> */}
      <Block type="bp_gopro_start" />
      <Block type="bp_gopro_end" />
      <Block type="bp_gopro_upload" />
      <Block type="bp_gopro_repeat" />
      {/* <Block type="bp_tile_setamount">
        <Value name="AMOUNT">
          <Shadow type="math_number">
            <Field name="NUM">10</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="bp_tile_move">
        <Value name="AMOUNT">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="bp_tile_command" />
      <Block type="bp_tile_onchange" />
      <Block type="bp_tile_trigger" /> */}
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
