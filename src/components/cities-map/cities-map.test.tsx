import * as React from 'react';
import * as renderer from 'react-test-renderer';

import CitiesMap from './cities-map';

const mocks = {
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12
    }
  },
  placesCoords: [
    { latitude: 0, longitude: 0, zoom: 12 },
    { latitude: 0, longitude: 0, zoom: 12 },
    { latitude: 0, longitude: 0, zoom: 12 },
    { latitude: 0, longitude: 0, zoom: 12 }
  ],
  leaflet: {
    icon: () => {},
    map: () => {
      setView: () => null
    },
  }
};

it(`CitiesMap renders correctly`, () => {
  const {city: { location }, placesCoords} = mocks;

  const citiesMap = renderer.create(
      <CitiesMap
        location={location}
        placesCoords={placesCoords}
      />
  );

  expect(citiesMap).toMatchSnapshot();
});
