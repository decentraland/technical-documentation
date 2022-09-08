import React from 'react';
import formatPaths from './src/utils/formatPaths'

const HeadComponents = [<><script key="rollbar" src={formatPaths("/scripts/rollbar.js")} /><script key="segment" src={formatPaths("/scripts/segment.js")} /></>];

const onRenderBody = ({ setHeadComponents }) => {
  // if (process.env.CI) {
    setHeadComponents(HeadComponents);
  //}
};

export { onRenderBody };
