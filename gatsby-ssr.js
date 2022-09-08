import React from 'react';

const HeadComponents = [<><script key="rollbar" src="/rollbar.js" /><script key="segment" src="/segment.js" /></>];

const onRenderBody = ({ setHeadComponents }) => {
  // if (process.env.CI) {
    setHeadComponents(HeadComponents);
  //}
};

export { onRenderBody };
