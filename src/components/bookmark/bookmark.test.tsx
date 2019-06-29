import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Bookmark} from './bookmark';

it(`Bookmark correctly renders in NO favorite item`, () => {
  const header = renderer.create(
      <Bookmark
        isFavorite={false}
        onFavoriteClick={jest.fn()}
      />
  ).toJSON();

  expect(header).toMatchSnapshot();
});

it(`Bookmark correctly renders in favorite item`, () => {
  const header = renderer.create(
      <Bookmark
        isFavorite={true}
        onFavoriteClick={jest.fn()}
      />
  ).toJSON();

  expect(header).toMatchSnapshot();
});
