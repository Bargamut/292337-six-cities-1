import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FavoritesEmpty from './favorites-empty';

it(`FavoritesEmpty correctly renders after relaunch`, () => {

  const favoritesEmpty = renderer.create(<FavoritesEmpty />).toJSON();

  expect(favoritesEmpty).toMatchSnapshot();
});
