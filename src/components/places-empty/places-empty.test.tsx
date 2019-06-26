import * as React from 'react';
import * as renderer from 'react-test-renderer';

import PlacesEmpty from './places-empty';

it(`Places Empty correctly renders`, () => {
  const placesEmpty = renderer.create(<PlacesEmpty cityName="Saint-Petersburg" />);

  expect(placesEmpty).toMatchSnapshot();
});
