import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main.jsx';

/* eslint-disable camelcase */

const mock = {
  city: `Amsterdam`,
  cities: [`Berlin`, `Amsterdam`],
  places: [
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      type: `Apartment`,
      preview_image: ``,
      is_premium: true,
      title: ``,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
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
