import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import offers from '../../mocks/offers';


const mock = {
  city: `Amsterdam`,
  citiesPlaces: [
    {
      city: `Asterdam`,
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
      city: `Berlin`,
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
      city: `London`,
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
      city: `Saint-Petersburg`,
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
  const {city, citiesPlaces} = mock;

  const app = renderer.create(
      <App
        city={city}
        cities={[
          ...new Set(citiesPlaces.map((place) => {
            return place.city;
          }))
        ]}
        citiesPlaces={citiesPlaces}
        onChangeCity={jest.fn()}
      />
  )
  .toJSON();

  expect(app).toMatchSnapshot();
});
