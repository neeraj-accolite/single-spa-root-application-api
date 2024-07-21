import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Footer from './Footer';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer,
});
export const { bootstrap, mount, unmount } = reactLifecycles;