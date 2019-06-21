import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FavoritesList from './favorites-list';

it(`FavoritesList correctly renders after relaunch`, () => {

  const favoritesList = renderer.create(<FavoritesList />).toJSON();

  expect(favoritesList).toMatchSnapshot();
});
