import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header.jsx';

it(`SignIn correctly renders after relaunch`, () => {

  const header = renderer.create(<Header />).toJSON();

  expect(header).toMatchSnapshot();
});
