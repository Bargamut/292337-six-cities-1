import * as React from 'react';
import * as renderer from 'react-test-renderer';

import CitiesMap from './cities-map';

const mocks = {
  city: `Amsterdam`,
  placesCoords: [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  leaflet: {
    icon: () => {},
    map: () => {
      setView: () => null
    },
  }
};

it(`CitiesMap renders correctly`, () => {
  const {city, placesCoords, leaflet} = mocks;

  const citiesMap = renderer.create(
      <CitiesMap
        // leaflet={leaflet}
        city={city}
        placesCoords={placesCoords}
      />
  );

  expect(citiesMap).toMatchSnapshot();
});
