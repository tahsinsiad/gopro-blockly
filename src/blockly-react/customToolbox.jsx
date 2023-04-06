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
      <Block type="bp_tile_getamount" />
      <Block type="bp_tile_setamount">
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
      <Block type="bp_tile_trigger" />
    </Category>
  </>
);

Blockly.setLocale({
  CATBP: 'Test',
  BP_HUE: 230,
});
