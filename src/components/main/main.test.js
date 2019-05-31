import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main.jsx';

const mock = {
  city: `Amsterdam`,
  cities: [`Berlin`, `Amsterdam`],
  places: [
    {
      city: `Amsterdam`,
      type: `Apartment`,
      img: ``,
      mark: `Premium`,
      name: ``,
      price: {
        value: 0,
        currency: `€`,
      },
      rating: 0,
      coords: [0, 0]
    }
  ]
};

it(`MainPage correctly renders after relaunch`, () => {
  const {city, cities, places} = mock;

  const mainPage = renderer.create(
      <MainPage
        city={city}
        cities={cities}
        citiesPlaces={places}
        onChangeCity={jest.fn()}
      />
  ).toJSON();

  expect(mainPage).toMatchSnapshot();
});
