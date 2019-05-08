import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const citiesPlaces = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

it(`App correctly renders after relaunch`, () => {
  const app = renderer.create(
      <App
        citiesPlaces={citiesPlaces}
      />
  )
  .toJSON();

  expect(app).toMatchSnapshot();
});
