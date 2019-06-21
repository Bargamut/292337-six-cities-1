import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Property from './property';

it(`Property correctly renders after relaunch`, () => {

  const property = renderer.create(<Property />).toJSON();

  expect(property).toMatchSnapshot();
});
