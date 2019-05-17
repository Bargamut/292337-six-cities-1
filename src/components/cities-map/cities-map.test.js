import React from 'react';
import renderer from 'react-test-renderer';
import CitiesMap from './cities-map.jsx';

const mocks = {
  city: [52.38333, 4.9],
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
        leaflet={leaflet}
        city={city}
        placesCoords={placesCoords}
      />
  );

  expect(citiesMap).toMatchSnapshot();
});
