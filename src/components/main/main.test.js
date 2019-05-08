import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main.jsx';

const placesNames = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

it(`MainPage correctly renders after relaunch`, () => {
  const mainPage = renderer.create(
      <MainPage
        placesNames={placesNames}
      />
  ).toJSON();

  expect(mainPage).toMatchSnapshot();
});
