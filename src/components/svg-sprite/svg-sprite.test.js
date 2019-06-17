import React from 'react';
import renderer from 'react-test-renderer';

import SvgSprite from './svg-sprite.jsx';

it(`SvgSprite correctly renders after relaunch`, () => {
  const svgSprite = renderer.create(<SvgSprite />).toJSON();

  expect(svgSprite).toMatchSnapshot();
});
