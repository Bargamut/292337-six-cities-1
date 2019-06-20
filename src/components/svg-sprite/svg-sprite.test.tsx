import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SvgSprite from './svg-sprite';

it(`SvgSprite correctly renders after relaunch`, () => {
  const svgSprite = renderer.create(<SvgSprite />).toJSON();

  expect(svgSprite).toMatchSnapshot();
});
