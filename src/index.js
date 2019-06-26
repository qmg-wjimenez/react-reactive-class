import React from './react-14';
import createReactiveClass from './createReactiveClass';

export function reactive(reactClass) {
  return createReactiveClass(reactClass);
}

export const dom = Object.keys(React.DOM).reduce((result, tag) => {
  result[tag] = createReactiveClass(tag);
  return result;
}, {});
