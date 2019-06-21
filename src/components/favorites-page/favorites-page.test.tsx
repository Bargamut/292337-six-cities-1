import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FavoritesPage from './favorites-page';

it(`FavoritesPage correctly renders after relaunch`, () => {

  const favoritesPage = renderer.create(<FavoritesPage />).toJSON();

  expect(favoritesPage).toMatchSnapshot();
});
