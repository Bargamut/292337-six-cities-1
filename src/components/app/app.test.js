import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const mock = {
  cityCoords: [52.38333, 4.9],
  citiesPlaces: [
    {
      type: `Apartment`,
      img: ``,
      mark: `Premium`,
      name: ``,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0,
      coords: [0, 0]
    },
    {
      type: `Private room`,
      img: ``,
      name: ``,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0,
      coords: [0, 0]
    },
    {
      type: `Apartment`,
      img: ``,
      name: ``,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0,
      coords: [0, 0]
    },
    {
      type: `Apartment`,
      img: ``,
      mark: `Premium`,
      name: ``,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0,
      coords: [0, 0]
    }
  ]
};

it(`App correctly renders after relaunch`, () => {
  const {cityCoords, citiesPlaces} = mock;

  const app = renderer.create(
      <App
        cityCoords={cityCoords}
        citiesPlaces={citiesPlaces}
      />
  )
  .toJSON();

  expect(app).toMatchSnapshot();
});
