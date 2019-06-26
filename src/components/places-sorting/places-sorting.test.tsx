import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { SORTING_OPTIONS } from '../../commons-data';

import PlacesSorting from './places-sorting';

it(`Places Sorting correctly renders`, () => {
  const placesSorting = renderer.create(
    <PlacesSorting
      sortItems={SORTING_OPTIONS}
    />
  );

  expect(placesSorting).toMatchSnapshot();
});
