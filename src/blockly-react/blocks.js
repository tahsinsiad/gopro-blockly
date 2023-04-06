import React from 'react';

function makeTag(tag) {
  return function (p) {
    const { children, ...props } = p;
    props.is = 'blockly';
    return React.createElement(tag, props, children);
  };
}

export const Xml = makeTag('xml');
export const Sep = makeTag('sep');
export const Mutation = makeTag('mutation');
export const Block = makeTag('block');
export const Shadow = makeTag('shadow');
export const Field = makeTag('field');
export const Value = makeTag('value');
export const Category = makeTag('category');
