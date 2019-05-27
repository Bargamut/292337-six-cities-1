import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

const mock = {
  citiesPlaces: [
    {
      city: `Amsterdam`,
      type: `Apartment`,
      img: ``,
      mark: `Premium`,
      name: ``,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0
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
      rating: 0
    },
    {
      city: `Sydney`,
      type: `Apartment`,
      img: ``,
      name: ``,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0
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
      rating: 0
    }
  ]
};

it(`Places List correctly renders`, () => {
  const {citiesPlaces} = mock;

  const placesList = renderer.create(
      <PlacesList
        citiesPlaces={citiesPlaces}
      />
  );

  expect(placesList).toMatchSnapshot();
});
