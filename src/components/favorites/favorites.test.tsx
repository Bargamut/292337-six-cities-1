import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Favorites from './favorites';

it(`Favorites correctly renders after relaunch`, () => {

  const favorites = renderer.create(<Favorites />).toJSON();

  expect(favorites).toMatchSnapshot();
});
