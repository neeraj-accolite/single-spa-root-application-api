import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Header from './Header';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
});
export const { bootstrap, mount, unmount } = reactLifecycles;